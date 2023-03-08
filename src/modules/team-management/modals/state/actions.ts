import { Action } from 'redux';
import { IAddTeamField, IEditTeamArgument } from '../interface/manage-team';

export const ADD_TEAM_REQUEST = 'TEAM_MANAGEMENT::ADD_TEAM_REQUEST';
export const ADD_TEAM_SUCCESS = 'TEAM_MANAGEMENT::ADD_TEAM_SUCCESS';
export const ADD_TEAM_FAILED = 'TEAM_MANAGEMENT::ADD_TEAM_FAILED';
export const DELETE_TEAM_REQUEST = 'TEAM_MANAGEMENT::DELETE_TEAM_REQUEST';
export const DELETE_TEAM_SUCCESS = 'TEAM_MANAGEMENT::DELETE_TEAM_SUCCESS';
export const DELETE_TEAM_FAILED = 'TEAM_MANAGEMENT::DELETE_TEAM_FAILED';
export const EDIT_TEAM_REQUEST = 'TEAM_MANAGEMENT::EDIT_TEAM_REQUEST';
export const EDIT_TEAM_SUCCESS = 'TEAM_MANAGEMENT::EDIT_TEAM_SUCCESS';
export const EDIT_TEAM_FAILED = 'TEAM_MANAGEMENT::EDIT_TEAM_FAILED';

// MODAL
export const OPEN_MODAL_ADD_TEAM = 'TEAM_MANAGEMENT::OPEN_MODAL_ADD_TEAM';
export const CLOSE_MODAL_ADD_TEAM = 'TEAM_MANAGEMENT::CLOSE_MODAL_ADD_TEAM';
export const OPEN_MODAL_EDIT_TEAM = 'TEAM_MANAGEMENT::OPEN_MODAL_EDIT_TEAM';
export const CLOSE_MODAL_EDIT_TEAM = 'TEAM_MANAGEMENT::CLOSE_MODAL_EDIT_TEAM';
export const OPEN_MODAL_DELETE_TEAM = 'TEAM_MANAGEMENT::OPEN_MODAL_DELETE_TEAM';
export const CLOSE_MODAL_DELETE_TEAM = 'TEAM_MANAGEMENT::CLOSE_MODAL_DELETE_TEAM';

export type IAddTeamRequestAction = Action<typeof ADD_TEAM_REQUEST> & {
  payload: IAddTeamField
}
export type IAddTeamSuccessAction = Action<typeof ADD_TEAM_SUCCESS>
export type IAddTeamFailedAction = Action<typeof ADD_TEAM_FAILED>
export type IDeleteTeamRequestAction = Action<typeof DELETE_TEAM_REQUEST> & {
  payload: string
}
export type IDeleteTeamSuccessAction = Action<typeof DELETE_TEAM_SUCCESS>
export type IDeleteTeamFailedAction = Action<typeof DELETE_TEAM_FAILED>
export type IEditTeamRequestAction = Action<typeof EDIT_TEAM_REQUEST> & {
  payload: {
    data: IEditTeamArgument,
    leagueIds: string[],
  }
}
export type IEditTeamSuccessAction = Action<typeof EDIT_TEAM_SUCCESS>
export type IEditTeamFailedAction = Action<typeof EDIT_TEAM_FAILED>

// MODAL
export type IOpenModalAddTeamAction = Action<typeof OPEN_MODAL_ADD_TEAM>
export type ICloseModalAddTeamAction = Action<typeof CLOSE_MODAL_ADD_TEAM>
export type IOpenModalEditTeamAction = Action<typeof OPEN_MODAL_EDIT_TEAM>
export type ICloseModalEditTeamAction = Action<typeof CLOSE_MODAL_EDIT_TEAM>
export type IOpenModalDeleteTeamAction = Action<typeof OPEN_MODAL_DELETE_TEAM>
export type ICloseModalDeleteTeamAction = Action<typeof CLOSE_MODAL_DELETE_TEAM>

export const addTeamRequest = (data: IAddTeamField): IAddTeamRequestAction => {
  return { type: ADD_TEAM_REQUEST, payload: data };
};
export const addTeamSuccess = () : IAddTeamSuccessAction => {
  return { type: ADD_TEAM_SUCCESS };
};
export const addMatchFail = () : IAddTeamFailedAction => {
  return { type: ADD_TEAM_FAILED };
};
export const deleteTeamRequest = (teamId: string) : IDeleteTeamRequestAction => {
  return { type: DELETE_TEAM_REQUEST, payload: teamId };
};
export const deleteTeamSuccess = () : IDeleteTeamSuccessAction => {
  return { type: DELETE_TEAM_SUCCESS };
};
export const deleteTeamFail = () : IDeleteTeamFailedAction => {
  return { type: DELETE_TEAM_FAILED };
};
export const editTeamRequest = (data: IEditTeamArgument, leagueIds: string[]): IEditTeamRequestAction => {
  return { type: EDIT_TEAM_REQUEST, payload: { data, leagueIds } };
};
export const editTeamSuccess = () : IEditTeamSuccessAction => {
  return { type: EDIT_TEAM_SUCCESS };
};
export const editMatchFail = () : IEditTeamFailedAction => {
  return { type: EDIT_TEAM_FAILED };
};

// MODAL
export const openModalAddTeam = () : IOpenModalAddTeamAction => {
  return { type: OPEN_MODAL_ADD_TEAM };
};
export const closeModalAddTeam = () : ICloseModalAddTeamAction => {
  return { type: CLOSE_MODAL_ADD_TEAM };
};
export const openModalEditTeam = () : IOpenModalEditTeamAction => {
  return { type: OPEN_MODAL_EDIT_TEAM };
};
export const closeModalEditTeam = () : ICloseModalEditTeamAction => {
  return { type: CLOSE_MODAL_EDIT_TEAM };
};
export const openModalDeleteTeam = () : IOpenModalDeleteTeamAction => {
  return { type: OPEN_MODAL_DELETE_TEAM };
};
export const closeModalDeleteTeam = () : ICloseModalDeleteTeamAction => {
  return { type: CLOSE_MODAL_DELETE_TEAM };
};
