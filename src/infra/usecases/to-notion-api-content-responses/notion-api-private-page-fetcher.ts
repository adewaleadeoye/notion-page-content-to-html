//@ts-nocheck
import { NotionPageIdValidator } from './validation';
import { Client } from '@notionhq/client';

const NOTION_API_PATH = 'https://api.notion.com/v1/';

const NOTION_TYPES = [
  { key: 'paragraph', value: 'text' },
  { key: 'quote', value: 'quote' },
  { key: 'heading_2', value: 'sub_header' },
  { key: 'heading_3', value: 'sub_sub_header' },
  { key: 'bulleted_list_item', value: 'bulleted_list' },
  { key: 'numbered_list_item', value: 'numbered_list' },
  { key: 'image', value: 'image' },
];

export class NotionApiPrivatePageFetcher {
  private readonly _blockId: string;
  private readonly _notionClient;
  private readonly _notionToken: string;

  constructor(blockId: string, notionToken: string) {
    const pageIdError = new NotionPageIdValidator(blockId).validate();
    if (pageIdError) throw pageIdError;

    this._blockId = blockId;
    this._notionToken = notionToken;
    this._notionClient = new Client({
      auth: notionToken,
    });
  }

  async readBlocks() {
    const blockId = this._blockId.replaceAll('-', '');

    try {
      const { results, ...blockResponse } = await this._notionClient.blocks.children.list({
        block_id: blockId,
      });

      const childRequests = results.map(async (block) => {
        if (block.has_children) {
          const children = await new NotionApiPrivatePageFetcher(block.id, this._notionToken).readBlocks();
          return { ...block, children };
        }
        return block;
      });

      const expandedResults = await Promise.all(childRequests);

      const contents = expandedResults.map((item) => {
        const id = item.id;
        const type = NOTION_TYPES.find((type) => type.key === item.type)?.value;
        let properties = {};
        if (type === 'image') {
          const innerType = item[item.type].type;

          const source = [[item[item.type]?.[innerType]?.url]];
          if (/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(source)) {
            properties['source'] = source;
          }
        } else {
          const itemEl = [];
          item[item.type].rich_text.forEach((itemType) => {
            const text = itemType.text?.content;
            const link = itemType.text.link ? ['a', itemType.text.link.url] : null;
            const annotations = itemType.annotations?.bold ? ['b'] : null;

            const elProps = [];
            if (annotations) elProps.push(annotations);
            if (link) elProps.push(link);
            if (text) itemEl.push([text, elProps]);
          });
          properties['title'] = itemEl;
        }

        return {
          id,
          type,
          properties,
          format: {},
          contents: [],
        };
      });

      return [
        {
          id: this._blockId,
          type: 'page',
          properties: {},
          format: {},
          contents,
        },
      ];
    } catch (error) {
      console.log('error!');
      console.error(error.body);
    }
  }
}
