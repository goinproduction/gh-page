import { Action } from 'redux';
import { IUserBettedStatisticParams, IUserBettedStatisticResponse } from '../interfaces/user-betted-statistic';

export const GET_USER_BETTED_STATISTIC_REQUEST = 'GET_USER_BETTED_STATISTIC_REQUEST';
export const GET_USER_BETTED_STATISTIC_SUCCESS = 'GET_USER_BETTED_STATISTIC_SUCCESS';
export const GET_USER_BETTED_STATISTIC_FAILED = 'GET_USER_BETTED_STATISTIC_FAILED';

export type IGetUserBettedStatisticRequestAction = Action<typeof GET_USER_BETTED_STATISTIC_REQUEST> & {
  payload: IUserBettedStatisticParams
}

export type IGetUserBettedStatisticSuccessAction = Action<typeof GET_USER_BETTED_STATISTIC_SUCCESS> & {
  payload: IUserBettedStatisticResponse
}

export type IGetUserBettedStatisticFailedAction = Action<typeof GET_USER_BETTED_STATISTIC_FAILED> & {
  payload: string
}

export const getUserBettedStatisticRequest = (params: IUserBettedStatisticParams): IGetUserBettedStatisticRequestAction => {
  return { type: GET_USER_BETTED_STATISTIC_REQUEST, payload: params };
};

export const getUserBettedStatisticSuccess = (userBettedStatisticResponse: IUserBettedStatisticResponse): IGetUserBettedStatisticSuccessAction => {
  return { type: GET_USER_BETTED_STATISTIC_SUCCESS, payload: userBettedStatisticResponse };
};

export const getUserBettedStatisticFailed = (error: string): IGetUserBettedStatisticFailedAction => {
  return { type: GET_USER_BETTED_STATISTIC_FAILED, payload: error };
};
