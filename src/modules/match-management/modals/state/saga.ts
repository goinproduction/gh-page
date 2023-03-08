/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { message } from 'antd';
import { BrowserHistory } from 'history';
import { call, fork, getContext, put, takeLatest } from 'redux-saga/effects';
import { defaultMatchListParams } from '../../../../utils/default-params';
import { IErrorResponse } from '../../../../utils/interfaces';
import { getMatchListRequest } from '../../match-list/state/actions';
import { IAddMatchField, IAddMatchResponse, IEditMatchArgument } from '../interface/manage-match';
import { MatchService } from '../manage-match-service';
import * as actions from './actions';

function* addMatch(action: actions.IAddMatchRequestAction) {
  const matchInfo : IAddMatchField = action.payload;
  try {
    const response : IAddMatchResponse = yield call(MatchService.addMatch, matchInfo);
    const history : BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const page = queryParams.get('page');
    message.success(response.message);
    yield put(actions.addMatchSuccess());
    yield put(actions.closeModalAddMatch());
    yield put(getMatchListRequest({ page, ...defaultMatchListParams }));
  } catch (error) {
    yield put(actions.addMatchFail());
    message.error((error as IErrorResponse).message);
  }
}
function* deleteMatch(action: actions.IDeleteMatchRequestAction) {
  const matchId : string = action.payload;
  try {
    const response : IAddMatchResponse = yield call(MatchService.deleteMatch, matchId);
    const history : BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const page = queryParams.get('page');
    yield put(actions.deleteMatchSuccess());
    yield put(actions.closeModalDeleteMatch());
    yield put(getMatchListRequest({ page, ...defaultMatchListParams }));
    message.success(response.message);
  } catch (error) {
    yield put(actions.deleteMatchFail());
    message.error((error as IErrorResponse).message);
  }
}
function* editMatch(action: actions.IEditMatchRequestAction) {
  const { matchInfo, id } = action.payload;
  try {
    yield call(MatchService.editMatch, matchInfo, id);
    const history : BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const page = queryParams.get('page');
    yield put(getMatchListRequest({ page, ...defaultMatchListParams }));
    yield put(actions.editMatchSuccess());
    yield put(actions.closeModalEditMatch());
    message.success('Edit match successfully');
  } catch (error) {
    yield put(actions.editMatchFail());
    message.error((error as IErrorResponse).message);
  }
}
function* editMatchScore(action: actions.IEditMatchScoreRequestAction) {
  const { matchInfo, id } = action.payload;
  try {
    yield call(MatchService.editMatchScore, matchInfo, id);
    const history : BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const page = queryParams.get('page');
    yield put(getMatchListRequest({ page, ...defaultMatchListParams }));
    yield put(actions.editMatchSuccess());
    yield put(actions.closeModalEditMatch());
    message.success('Edit match successfully');
  } catch (error) {
    yield put(actions.editMatchFail());
    message.error((error as IErrorResponse).message);
  }
}
function* watchAddMatchRequest() {
  yield takeLatest(actions.ADD_MATCH_REQUEST, addMatch);
}
function* watchDeleteMatchRequest() {
  yield takeLatest(actions.DELETE_MATCH_REQUEST, deleteMatch);
}
function* watchEditMatchRequest() {
  yield takeLatest(actions.EDIT_MATCH_REQUEST, editMatch);
}
function* watchEditMatchScoreRequest() {
  yield takeLatest(actions.EDIT_MATCH_SCORE_REQUEST, editMatchScore);
}
const manageMatchSagas = [fork(watchAddMatchRequest), fork(watchDeleteMatchRequest), fork(watchEditMatchRequest), fork(watchEditMatchScoreRequest)];

export default manageMatchSagas;
