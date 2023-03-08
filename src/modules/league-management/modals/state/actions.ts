import { Action } from 'redux';
import { IAddLeagueField } from '../interface/manage-league';

export const ADD_LEAGUE_REQUEST = 'LEAGUE_MANAGEMENT::ADD_LEAGUE_REQUEST';
export const ADD_LEAGUE_SUCCESS = 'LEAGUE_MANAGEMENT::ADD_LEAGUE_SUCCESS';
export const ADD_LEAGUE_FAILED = 'LEAGUE_MANAGEMENT::ADD_LEAGUE_FAILED';
export const DELETE_LEAGUE_REQUEST = 'LEAGUE_MANAGEMENT::DELETE_LEAGUE_REQUEST';
export const DELETE_LEAGUE_SUCCESS = 'LEAGUE_MANAGEMENT::DELETE_LEAGUE_SUCCESS';
export const DELETE_LEAGUE_FAILED = 'LEAGUE_MANAGEMENT::DELETE_LEAGUE_FAILED';
export const EDIT_LEAGUE_REQUEST = 'LEAGUE_MANAGEMENT::EDIT_LEAGUE_REQUEST';
export const EDIT_LEAGUE_SUCCESS = 'LEAGUE_MANAGEMENT::EDIT_LEAGUE_SUCCESS';
export const EDIT_LEAGUE_FAILED = 'LEAGUE_MANAGEMENT::EDIT_LEAGUE_FAILED';

// MODAL
export const OPEN_MODAL_ADD_LEAGUE = 'LEAGUE_MANAGEMENT::OPEN_MODAL_ADD_LEAGUE';
export const CLOSE_MODAL_ADD_LEAGUE = 'LEAGUE_MANAGEMENT::CLOSE_MODAL_ADD_LEAGUE';
export const OPEN_MODAL_EDIT_LEAGUE = 'LEAGUE_MANAGEMENT::OPEN_MODAL_EDIT_LEAGUE';
export const CLOSE_MODAL_EDIT_LEAGUE = 'LEAGUE_MANAGEMENT::CLOSE_MODAL_EDIT_LEAGUE';
export const OPEN_MODAL_DELETE_LEAGUE = 'LEAGUE_MANAGEMENT::OPEN_MODAL_DELETE_LEAGUE';
export const CLOSE_MODAL_DELETE_LEAGUE = 'LEAGUE_MANAGEMENT::CLOSE_MODAL_DELETE_LEAGUE';

export type IAddLeagueRequestAction = Action<typeof ADD_LEAGUE_REQUEST> & {
  payload: IAddLeagueField
}
export type IAddLeagueSuccessAction = Action<typeof ADD_LEAGUE_SUCCESS>
export type IAddLeagueFailedAction = Action<typeof ADD_LEAGUE_FAILED>
export type IDeleteLeagueRequestAction = Action<typeof DELETE_LEAGUE_REQUEST> & {
  payload: string
}
export type IDeleteLeagueSuccessAction = Action<typeof DELETE_LEAGUE_SUCCESS>
export type IDeleteLeagueFailedAction = Action<typeof DELETE_LEAGUE_FAILED>
export type IEditLeagueRequestAction = Action<typeof EDIT_LEAGUE_REQUEST> & {
  payload: {
    data: IAddLeagueField,
    leagueId: string,
  }
}
export type IEditLeagueSuccessAction = Action<typeof EDIT_LEAGUE_SUCCESS>
export type IEditLeagueFailedAction = Action<typeof EDIT_LEAGUE_FAILED>

// MODAL
export type IOpenModalAddLeagueAction = Action<typeof OPEN_MODAL_ADD_LEAGUE>
export type ICloseModalAddLeagueAction = Action<typeof CLOSE_MODAL_ADD_LEAGUE>
export type IOpenModalEditLeagueAction = Action<typeof OPEN_MODAL_EDIT_LEAGUE>
export type ICloseModalEditLeagueAction = Action<typeof CLOSE_MODAL_EDIT_LEAGUE>
export type IOpenModalDeleteLeagueAction = Action<typeof OPEN_MODAL_DELETE_LEAGUE>
export type ICloseModalDeleteLeagueAction = Action<typeof CLOSE_MODAL_DELETE_LEAGUE>

export const addLeagueRequest = (data: IAddLeagueField): IAddLeagueRequestAction => {
  return { type: ADD_LEAGUE_REQUEST, payload: data };
};
export const addLeagueSuccess = () : IAddLeagueSuccessAction => {
  return { type: ADD_LEAGUE_SUCCESS };
};
export const addLeagueFail = () : IAddLeagueFailedAction => {
  return { type: ADD_LEAGUE_FAILED };
};
export const deleteLeagueRequest = (teamId: string) : IDeleteLeagueRequestAction => {
  return { type: DELETE_LEAGUE_REQUEST, payload: teamId };
};
export const deleteLeagueSuccess = () : IDeleteLeagueSuccessAction => {
  return { type: DELETE_LEAGUE_SUCCESS };
};
export const deleteLeagueFail = () : IDeleteLeagueFailedAction => {
  return { type: DELETE_LEAGUE_FAILED };
};
export const editLeagueRequest = (data: IAddLeagueField, leagueId: string): IEditLeagueRequestAction => {
  return { type: EDIT_LEAGUE_REQUEST, payload: { data, leagueId } };
};
export const editLeagueSuccess = () : IEditLeagueSuccessAction => {
  return { type: EDIT_LEAGUE_SUCCESS };
};
export const editLeagueFail = () : IEditLeagueFailedAction => {
  return { type: EDIT_LEAGUE_FAILED };
};

// MODAL
export const openModalAddLeague = () : IOpenModalAddLeagueAction => {
  return { type: OPEN_MODAL_ADD_LEAGUE };
};
export const closeModalAddLeague = () : ICloseModalAddLeagueAction => {
  return { type: CLOSE_MODAL_ADD_LEAGUE };
};
export const openModalEditLeague = () : IOpenModalEditLeagueAction => {
  return { type: OPEN_MODAL_EDIT_LEAGUE };
};
export const closeModalEditLeague = () : ICloseModalEditLeagueAction => {
  return { type: CLOSE_MODAL_EDIT_LEAGUE };
};
export const openModalDeleteLeague = () : IOpenModalDeleteLeagueAction => {
  return { type: OPEN_MODAL_DELETE_LEAGUE };
};
export const closeModalDeleteLeague = () : ICloseModalDeleteLeagueAction => {
  return { type: CLOSE_MODAL_DELETE_LEAGUE };
};
