/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { message } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../../utils/interfaces';
import { IResponseTeamList } from '../interfaces/team-list';
import * as service from '../team-list-service';
import * as teamListActions from './actions';

export function* getTeamList(action: teamListActions.IGetTeamListRequestAction) {
  try {
    // call api
    const teamListResponse: IResponseTeamList = yield call(service.getTeamList, action.payload);
    // put Action
    yield put(teamListActions.getTeamListSuccess(teamListResponse));
  } catch (error) {
    yield put(teamListActions.getTeamListFailed());
    message.error((error as IErrorResponse).message);
  }
}

function* watchGetTeamListRequest() {
  yield takeLatest(teamListActions.GET_TEAM_LIST_REQUEST, getTeamList);
}

const teamListSagas = [fork(watchGetTeamListRequest)];

export default teamListSagas;
