import { Action } from 'redux';
import { IFilterMatchParams, IResponseMatchList } from '../interfaces/match-list';

export const GET_MATCH_LIST_REQUEST = 'GET_MATCH_LIST_REQUEST';
export const GET_MATCH_LIST_SUCCESS = 'GET_MATCH_LIST_SUCCESS';
export const GET_MATCH_LIST_FAILED = 'GET_MATCH_LIST_FAILED';

export type IGetMatchListRequestAction = Action<typeof GET_MATCH_LIST_REQUEST> & {
  payload: IFilterMatchParams
}

export type IGetMatchListSuccessAction = Action<typeof GET_MATCH_LIST_SUCCESS> & {
  payload: IResponseMatchList
}

export type IGetMatchListFailedAction = Action<typeof GET_MATCH_LIST_FAILED>

export const getMatchListRequest = (data: IFilterMatchParams): IGetMatchListRequestAction => {
  return { type: GET_MATCH_LIST_REQUEST, payload: data };
};

export const getMatchListSuccess = (matchListResponse: IResponseMatchList): IGetMatchListSuccessAction => {
  return { type: GET_MATCH_LIST_SUCCESS, payload: matchListResponse };
};

export const getMatchListFailed = (): IGetMatchListFailedAction => {
  return { type: GET_MATCH_LIST_FAILED };
};
