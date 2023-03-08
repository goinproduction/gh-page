import { Action } from 'redux';
import { ITeamMatch } from '../../match-management/match-list/interfaces/match-list';
import { IBetParams } from '../interfaces/modal-bet';

export const OPEN_MODAL_CONFIRM = 'OPEN_MODAL_CONFIRM';
export const CLOSE_MODAL_CONFIRM = 'CLOSE_MODAL_CONFIRM';
export const BET_TEAM_REQUEST = 'BET_TEAM_REQUEST';
export const BET_TEAM_SUCCESS = 'BET_TEAM_SUCCESS';
export const BET_TEAM_FAILED = 'BET_TEAM_FAILED';

export type IOpenModalConfirmAction = Action<typeof OPEN_MODAL_CONFIRM> & {
  payload: ITeamMatch
}

export type ICloseModalConfirmAction = Action<typeof CLOSE_MODAL_CONFIRM>

export type IBetTeamRequestAction = Action<typeof BET_TEAM_REQUEST> & {
  payload: IBetParams
}

export type IBetTeamSuccessAction = Action<typeof BET_TEAM_SUCCESS>

export type IBetTeamFailedAction = Action<typeof BET_TEAM_FAILED>

export const openModalConfirm = (team: ITeamMatch): IOpenModalConfirmAction => {
  return { type: OPEN_MODAL_CONFIRM, payload: team };
};

export const closeModalConfirm = (): ICloseModalConfirmAction => {
  return { type: CLOSE_MODAL_CONFIRM };
};

export const betTeamRequest = (params: IBetParams): IBetTeamRequestAction => {
  return { type: BET_TEAM_REQUEST, payload: params };
};

export const betTeamSuccess = (): IBetTeamSuccessAction => {
  return { type: BET_TEAM_SUCCESS };
};

export const betTeamFailed = (): IBetTeamFailedAction => {
  return { type: BET_TEAM_FAILED };
};
