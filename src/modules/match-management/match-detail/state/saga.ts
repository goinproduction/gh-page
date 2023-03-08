import { notification } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../../utils/interfaces';
import { IMatchDetail } from '../interfaces/match-detail';
import * as service from '../match-detail-service';
import * as matchDetailActions from './actions';

export function* getMatchDetail(action: matchDetailActions.IGetMatchDetailRequestAction) {
  try {
    // call api
    const matchId = action.payload;
    const matchDetail: IMatchDetail = yield call(service.getMatchDetail, matchId);
    // put Action
    yield put(matchDetailActions.getMatchDetailSuccess(matchDetail));
  } catch (error) {
    const errorMessage = 'Failed to get match detail';
    yield put(matchDetailActions.getMatchDetailFailed(errorMessage));
    notification.error({
      message: errorMessage,
      description: (error as IErrorResponse).message,
      duration: 50,
      placement: 'bottomRight',
    });
  }
}

function* watchMatchDetailRequest() {
  yield takeLatest(matchDetailActions.GET_MATCH_DETAIL_REQUEST, getMatchDetail);
}

const matchDetailSagas = [fork(watchMatchDetailRequest)];

export default matchDetailSagas;
