import { Action } from 'redux';
import { ILeagueListResponse } from '../interfaces/league-list';

export const GET_LEAGUE_LIST_REQUEST = 'GET_LEAGUE_LIST_REQUEST';
export const GET_LEAGUE_LIST_SUCCESS = 'GET_LEAGUE_LIST_SUCCESS';
export const GET_LEAGUE_LIST_FAILED = 'GET_LEAGUE_LIST_FAILED';
export const CHOOSE_FILTER_LEAGUE = 'CHOOSE_FILTER_LEAGUE';

export type IGetLeagueListRequestAction = Action<typeof GET_LEAGUE_LIST_REQUEST>

export type IGetLeagueListSuccessAction = Action<typeof GET_LEAGUE_LIST_SUCCESS> & {
  payload: ILeagueListResponse
}

export type IGetLeagueListFailedAction = Action<typeof GET_LEAGUE_LIST_FAILED> & {
  payload: string
}

export type IChooseFilterLeagueAction = Action<typeof CHOOSE_FILTER_LEAGUE> & {
  payload: string
}

export const getLeagueListRequest = (): IGetLeagueListRequestAction => {
  return { type: GET_LEAGUE_LIST_REQUEST };
};

export const getLeagueListSuccess = (leagueList: ILeagueListResponse): IGetLeagueListSuccessAction => {
  return { type: GET_LEAGUE_LIST_SUCCESS, payload: leagueList };
};

export const getLeagueListFailed = (error: string): IGetLeagueListFailedAction => {
  return { type: GET_LEAGUE_LIST_FAILED, payload: error };
};

export const chooseFilterLeague = (leagueId: string): IChooseFilterLeagueAction => {
  return { type: CHOOSE_FILTER_LEAGUE, payload: leagueId };
};
