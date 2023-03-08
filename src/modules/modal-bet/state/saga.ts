import { notification } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../utils/interfaces';
import * as matchDetailActions from '../../match-management/match-detail/state/actions';
import { IBetResponse } from '../interfaces/modal-bet';
import * as service from '../modal-bet-service';
import * as betActions from './actions';

export function* betTeam(action: betActions.IBetTeamRequestAction) {
  try {
    // call api
    const params = action.payload;
    const response: IBetResponse = yield call(service.betTeam, params);
    // put Action
    yield put(betActions.betTeamSuccess());
    yield put(matchDetailActions.changeTeamUserBet(response));
    yield put(betActions.closeModalConfirm());
    notification.success({
      message: 'Bet Success',
      duration: 5,
      placement: 'bottom',
    });
  } catch (error) {
    const errorMessage = 'Failed to make a bet';
    yield put(betActions.betTeamFailed());
    const descriptionError = (error as IErrorResponse).message;
    notification.error({
      message: errorMessage,
      description: descriptionError,
      duration: 10,
      placement: 'bottomRight',
    });
  }
}

function* watchBetTeamRequest() {
  yield takeLatest(betActions.BET_TEAM_REQUEST, betTeam);
}

const betTeamSagas = [fork(watchBetTeamRequest)];

export default betTeamSagas;
