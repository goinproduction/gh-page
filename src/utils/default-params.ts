import { DEFAULT_PAGE_SIZE, USER_LIST_PAGE_SIZE } from './constants/pagination';

export const defaultMatchListParams = {
  limit: DEFAULT_PAGE_SIZE,
  filterLeague: null,
  keyword: null,
  matchStatus: null,
};

export const defaultTeamListParams = {
  limit: USER_LIST_PAGE_SIZE.toString(),
};

export const DEFAULT_FILTER_PARAM = 'all';
