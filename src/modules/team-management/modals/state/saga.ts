import { message } from 'antd';
import { call, fork, getContext, put, takeLatest } from 'redux-saga/effects';
import { BrowserHistory } from 'history';
import { ManageTeamService } from '../manage-team-service';
import { IAddTeamField } from '../interface/manage-team';
import * as actions from './actions';
import { IErrorResponse } from '../../../../utils/interfaces';
import { getTeamListRequest } from '../../team-list/state/actions';
import { defaultTeamListParams } from '../../../../utils/default-params';

function* addTeam(action: actions.IAddTeamRequestAction) {
  const teamInfo : IAddTeamField = action.payload;
  try {
    yield call(ManageTeamService.addTeam, teamInfo);
    const history : BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const page = queryParams.get('page');
    const leagueId = queryParams.get('leagueId');
    yield put(getTeamListRequest({ page, leagueId, ...defaultTeamListParams }));
    message.success('Add Team Success');
    yield put(actions.addTeamSuccess());
    yield put(actions.closeModalAddTeam());
  } catch (error) {
    yield put(actions.addMatchFail());
    message.error((error as IErrorResponse).message);
  }
}
function* editTeam(action: actions.IEditTeamRequestAction) {
  const { data: teamInfo, leagueIds } = action.payload;
  try {
    yield call(ManageTeamService.editTeam, teamInfo, leagueIds);
    const history : BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const page = queryParams.get('page');
    const leagueId = queryParams.get('leagueId');
    yield put(getTeamListRequest({ page, leagueId, ...defaultTeamListParams }));
    message.success('Edit Team Success');
    yield put(actions.editTeamSuccess());
    yield put(actions.closeModalEditTeam());
  } catch (error) {
    yield put(actions.editMatchFail());
    message.error((error as IErrorResponse).message);
  }
}
function* deleteTeam(action: actions.IDeleteTeamRequestAction) {
    const teamId : string = action.payload;
    try {
      yield call(ManageTeamService.deleteTeam, teamId);
      const history : BrowserHistory = yield getContext('history');
      const queryParams = new URLSearchParams(history.location.search);
      const page = queryParams.get('page');
      const leagueId = queryParams.get('leagueId');
      yield put(getTeamListRequest({ page, leagueId, ...defaultTeamListParams }));
      message.success('Delete Team Success');
      yield put(actions.deleteTeamSuccess());
      yield put(actions.closeModalDeleteTeam());
    } catch (error) {
      yield put(actions.deleteTeamFail());
    message.error((error as IErrorResponse).message);
    }
}
function* watchAddTeamRequest() {
  yield takeLatest(actions.ADD_TEAM_REQUEST, addTeam);
}
function* watchEditTeamRequest() {
  yield takeLatest(actions.EDIT_TEAM_REQUEST, editTeam);
}
function* watchDeleteTeamRequest() {
  yield takeLatest(actions.DELETE_TEAM_REQUEST, deleteTeam);
}
const manageTeamSagas = [fork(watchAddTeamRequest), fork(watchEditTeamRequest), fork(watchDeleteTeamRequest)];

export default manageTeamSagas;
