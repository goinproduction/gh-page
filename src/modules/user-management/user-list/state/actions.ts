import { Action } from 'redux';
import { IGetUserListParams, IResponseUserList } from '../interface/user-list';

export const GET_USER_LIST_REQUEST = 'GET_USER_LIST_REQUEST';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_FAILED = 'GET_USER_LIST_FAILED';

export type IGetUserListRequestAction = Action<typeof GET_USER_LIST_REQUEST> & {
  payload: IGetUserListParams
}

export type IGetUserListSuccessAction = Action<typeof GET_USER_LIST_SUCCESS> & {
  payload: IResponseUserList
}

export type IGetUserListFailedAction = Action<typeof GET_USER_LIST_FAILED>

export const getUserListRequest = (params: IGetUserListParams): IGetUserListRequestAction => {
  return { type: GET_USER_LIST_REQUEST, payload: params };
};

export const getUserListSuccess = (userListResponse: IResponseUserList): IGetUserListSuccessAction => {
  return { type: GET_USER_LIST_SUCCESS, payload: userListResponse };
};

export const getUserListFailed = (): IGetUserListFailedAction => {
  return { type: GET_USER_LIST_FAILED };
};
