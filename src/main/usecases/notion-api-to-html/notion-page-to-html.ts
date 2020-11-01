import { HtmlOptions } from '../../../data/protocols/html-options/html-options';
import { OptionsHtmlWrapper } from '../../../data/usecases/html-wrapper/options-html-wrapper';
import { NotionApiContentResponsesToBlocks } from '../../../infra/usecases/to-blocks/notion-api-content-response-to-blocks';
import { makeNotionUrlToPageIdFactory, makeNotionApiPageFetcher, makeBlocksToHtml } from '../../factories';

export class NotionPageToHtml {
  static async convert(pageURL: string, htmlOptions: HtmlOptions = {}): Promise<string> {
    return new NotionPageToHtml()._convert(pageURL, htmlOptions);
  }

  static async parse(pageURL: string, includeFullDocument = true): Promise<string> {
    return new NotionPageToHtml()._parse(pageURL, includeFullDocument);
  }

  private async _convert(pageURL: string, htmlOptions: HtmlOptions = {}): Promise<string> {
    const pageId = makeNotionUrlToPageIdFactory(pageURL).toPageId();
    const fetcher = await makeNotionApiPageFetcher(pageId);
    const notionApiResponses = await fetcher.getNotionPageContents();
    const blocks = new NotionApiContentResponsesToBlocks(notionApiResponses).toBlocks();

    if (blocks.length === 0) return Promise.resolve('');

    const title = blocks[0].decorableTexts[0]?.text || '';
    const htmlBody = await makeBlocksToHtml(blocks).convert();

    return new OptionsHtmlWrapper(htmlOptions).wrapHtml(title, htmlBody);
  }

  private async _parse(pageURL: string, includeFullDocument = true): Promise<string> {
    console.warn('"parse" method is now deprecated. Please, use "convert" instead.');
    return this._convert(pageURL, { bodyContentOnly: !includeFullDocument });
  }
}
