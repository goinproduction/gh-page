import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { notification } from 'antd';
import * as service from '../league-list-service';
import { ILeagueListResponse } from '../interfaces/league-list';
import * as filterActions from './action';
import { IErrorResponse } from '../../../utils/interfaces';

export function* getLeagueList() {
  try {
    // call api
    const leagueList: ILeagueListResponse = yield call(service.getLeagueList);
    // put Action
    yield put(filterActions.getLeagueListSuccess(leagueList));
  } catch (error) {
    const errorMessage = 'Failed to get league list';
    yield put(filterActions.getLeagueListFailed(errorMessage));
    notification.error({
      message: (error as IErrorResponse).message,
      description: errorMessage,
      duration: 10,
      placement: 'bottomRight',
    });
  }
}

function* watchLeagueListRequest() {
  yield takeLatest(filterActions.GET_LEAGUE_LIST_REQUEST, getLeagueList);
}

const leagueListSagas = [fork(watchLeagueListRequest)];

export default leagueListSagas;
