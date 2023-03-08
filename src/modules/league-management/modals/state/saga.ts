import { message } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../../utils/interfaces';
import { getLeagueListRequest } from '../../../league-list/state/action';
import { ManageLeagueService } from '../../manage-league-service';
import { IAddLeagueField } from '../interface/manage-league';
import * as actions from './actions';

function* addLeague(action: actions.IAddLeagueRequestAction) {
  const leagueInfo : IAddLeagueField = action.payload;
  try {
    yield call(ManageLeagueService.addLeague, leagueInfo);
    yield put(getLeagueListRequest());
    message.success('Add League Success');
    yield put(actions.addLeagueSuccess());
    yield put(actions.closeModalAddLeague());
  } catch (error) {
    yield put(actions.addLeagueFail());
    message.error((error as IErrorResponse).message);
  }
}
function* editLeague(action: actions.IEditLeagueRequestAction) {
  const { data: league, leagueId } = action.payload;
  try {
    yield call(ManageLeagueService.editLeague, league, leagueId);
    yield put(getLeagueListRequest());
    message.success('Edit League Success');
    yield put(actions.editLeagueSuccess());
    yield put(actions.closeModalEditLeague());
  } catch (error) {
    yield put(actions.editLeagueFail());
    message.error((error as IErrorResponse).message);
  }
}
function* deleteLeague(action: actions.IDeleteLeagueRequestAction) {
    const leagueId : string = action.payload;
    try {
      yield call(ManageLeagueService.deleteLeague, leagueId);
      yield put(getLeagueListRequest());
      message.success('Delete League Success');
      yield put(actions.deleteLeagueSuccess());
      yield put(actions.closeModalDeleteLeague());
    } catch (error) {
      yield put(actions.deleteLeagueFail());
    message.error((error as IErrorResponse).message);
    }
}
function* watchAddLeagueRequest() {
  yield takeLatest(actions.ADD_LEAGUE_REQUEST, addLeague);
}
function* watchEditLeagueRequest() {
  yield takeLatest(actions.EDIT_LEAGUE_REQUEST, editLeague);
}
function* watchDeleteLeagueRequest() {
  yield takeLatest(actions.DELETE_LEAGUE_REQUEST, deleteLeague);
}
const manageLeagueSagas = [fork(watchAddLeagueRequest), fork(watchEditLeagueRequest), fork(watchDeleteLeagueRequest)];

export default manageLeagueSagas;
