/* eslint-disable @typescript-eslint/no-unused-vars */
import { notification } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../../utils/interfaces';
import { IResponseUserList } from '../interface/user-list';
import * as service from '../user-list-service';
import * as userListActions from './actions';

export function* getUserList(action: userListActions.IGetUserListRequestAction) {
  try {
    // call api
    const userListResponse: IResponseUserList = yield call(service.getUserList, action.payload);
    // put Action
    yield put(userListActions.getUserListSuccess(userListResponse));
  } catch (error) {
    const errorMessage = 'Failed to get user list';
    const descriptionError = (error as IErrorResponse).message;
    notification.error({
      message: errorMessage,
      description: descriptionError,
      duration: 10,
      placement: 'bottomRight',
    });
  }
}

function* watchGetUserListRequest() {
  yield takeLatest(userListActions.GET_USER_LIST_REQUEST, getUserList);
}

const userListSagas = [fork(watchGetUserListRequest)];

export default userListSagas;
