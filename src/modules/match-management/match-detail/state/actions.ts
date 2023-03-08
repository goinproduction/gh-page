import { Action } from 'redux';
import { IBetResponse } from '../../../modal-bet/interfaces/modal-bet';
import { IMatchDetail } from '../interfaces/match-detail';

export const CHANGE_TEAM_USER_BET = 'CHANGE_TEAM_USER_BET';
export const GET_MATCH_DETAIL_REQUEST = 'GET_MATCH_DETAIL_REQUEST';
export const GET_MATCH_DETAIL_SUCCESS = 'GET_MATCH_DETAIL_SUCCESS';
export const GET_MATCH_DETAIL_FAILED = 'GET_MATCH_DETAIL_FAILED';

export type IChangeTeamUserBetAction = Action<typeof CHANGE_TEAM_USER_BET> & {
  payload: IBetResponse
}

export type IGetMatchDetailRequestAction = Action<typeof GET_MATCH_DETAIL_REQUEST> & {
  payload: string
}

export type IGetMatchDetailSuccessAction = Action<typeof GET_MATCH_DETAIL_SUCCESS> & {
  payload: IMatchDetail
}

export type IGetMatchDetailFailedAction = Action<typeof GET_MATCH_DETAIL_FAILED> & {
  payload: string
}

export const changeTeamUserBet = (response:IBetResponse): IChangeTeamUserBetAction => {
  return { type: CHANGE_TEAM_USER_BET, payload: response };
};

export const getMatchDetailRequest = (matchId: string): IGetMatchDetailRequestAction => {
  return { type: GET_MATCH_DETAIL_REQUEST, payload: matchId };
};

export const getMatchDetailSuccess = (matchDetail: IMatchDetail): IGetMatchDetailSuccessAction => {
  return { type: GET_MATCH_DETAIL_SUCCESS, payload: matchDetail };
};

export const getMatchDetailFailed = (error: string): IGetMatchDetailFailedAction => {
  return { type: GET_MATCH_DETAIL_FAILED, payload: error };
};
