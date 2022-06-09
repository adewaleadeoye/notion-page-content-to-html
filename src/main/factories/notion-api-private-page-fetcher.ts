import { NotionApiPrivatePageFetcher } from '../../infra/usecases/to-notion-api-content-responses/notion-api-private-page-fetcher';

export const makeNotionApiPrivatePageFetcher = async (
  pageId: string,
  notionToken: string,
): Promise<NotionApiPrivatePageFetcher> => {
  return Promise.resolve(new NotionApiPrivatePageFetcher(pageId, notionToken));
};
