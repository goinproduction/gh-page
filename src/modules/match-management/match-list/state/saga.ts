/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { notification } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../../utils/interfaces';
import { IResponseMatchList } from '../interfaces/match-list';
import * as service from '../match-list-service';
import * as matchListActions from './actions';
import * as leagueListActions from '../../../league-list/state/action';
import { DEFAULT_FILTER_PARAM } from '../../../../utils/default-params';

export function* getMatchList(action: matchListActions.IGetMatchListRequestAction) {
  try {
    // call api
    const params = action.payload;
    const matchListResponse: IResponseMatchList = yield call(service.getMatchList, params);
    // put Action
    yield put(matchListActions.getMatchListSuccess(matchListResponse));
    yield put(leagueListActions.chooseFilterLeague(params.filterLeague || DEFAULT_FILTER_PARAM));
  } catch (error) {
    const errorMessage = 'Failed to get match list';
    yield put(matchListActions.getMatchListFailed());
    notification.error({
      message: errorMessage,
      description: (error as IErrorResponse).message,
      duration: 10,
      placement: 'bottomRight',
    });
  }
}

function* watchMatchListRequest() {
  yield takeLatest(matchListActions.GET_MATCH_LIST_REQUEST, getMatchList);
}

const matchListSagas = [fork(watchMatchListRequest)];

export default matchListSagas;
