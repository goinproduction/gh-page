import { Action } from 'redux';
import { IGetTeamListParams, IResponseTeamList } from '../interfaces/team-list';

export const GET_TEAM_LIST_REQUEST = 'GET_TEAM_LIST_REQUEST';
export const GET_TEAM_LIST_SUCCESS = 'GET_TEAM_LIST_SUCCESS';
export const GET_TEAM_LIST_FAILED = 'GET_TEAM_LIST_FAILED';

export type IGetTeamListRequestAction = Action<typeof GET_TEAM_LIST_REQUEST> & {
  payload: IGetTeamListParams
}

export type IGetTeamListSuccessAction = Action<typeof GET_TEAM_LIST_SUCCESS> & {
  payload: IResponseTeamList
}

export type IGetTeamListFailedAction = Action<typeof GET_TEAM_LIST_FAILED>

export const getTeamListRequest = (params: IGetTeamListParams): IGetTeamListRequestAction => {
  return { type: GET_TEAM_LIST_REQUEST, payload: params };
};

export const getTeamListSuccess = (teamListResponse: IResponseTeamList): IGetTeamListSuccessAction => {
  return { type: GET_TEAM_LIST_SUCCESS, payload: teamListResponse };
};

export const getTeamListFailed = (): IGetTeamListFailedAction => {
  return { type: GET_TEAM_LIST_FAILED };
};
