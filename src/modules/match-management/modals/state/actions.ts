import { Action } from 'redux';
import { IMatchInfo } from '../../match-list/interfaces/match-list';
import { IAddMatchField, IEditMatchArgument, IEditMatchScoreArgument } from '../interface/manage-match';

export const ADD_MATCH_REQUEST = 'MATCH_MANAGEMENT::ADD_MATCH_REQUEST';
export const ADD_MATCH_SUCCESS = 'MATCH_MANAGEMENT::ADD_MATCH_SUCCESS';
export const ADD_MATCH_FAILED = 'MATCH_MANAGEMENT::ADD_MATCH_FAILED';
export const DELETE_MATCH_REQUEST = 'MATCH_MANAGEMENT::DELETE_MATCH_REQUEST';
export const DELETE_MATCH_SUCCESS = 'MATCH_MANAGEMENT::DELETE_MATCH_SUCCESS';
export const DELETE_MATCH_FAILED = 'MATCH_MANAGEMENT::DELETE_MATCH_FAILED';
export const EDIT_MATCH_REQUEST = 'MATCH_MANAGEMENT::EDIT_MATCH_REQUEST';
export const EDIT_MATCH_SCORE_REQUEST = 'MATCH_MANAGEMENT::EDIT_MATCH_SCORE_REQUEST';
export const EDIT_MATCH_SUCCESS = 'MATCH_MANAGEMENT::EDIT_MATCH_SUCCESS';
export const EDIT_MATCH_FAILED = 'MATCH_MANAGEMENT::EDIT_MATCH_FAILED';

// MODAL
export const OPEN_MODAL_ADD_MATCH = 'MATCH_MANAGEMENT::OPEN_MODAL_ADD_MATCH';
export const CLOSE_MODAL_ADD_MATCH = 'MATCH_MANAGEMENT::CLOSE_MODAL_ADD_MATCH';
export const OPEN_MODAL_EDIT_MATCH = 'MATCH_MANAGEMENT::OPEN_MODAL_EDIT_MATCH';
export const CLOSE_MODAL_EDIT_MATCH = 'MATCH_MANAGEMENT::CLOSE_MODAL_EDIT_MATCH';
export const OPEN_MODAL_DELETE_MATCH = 'MATCH_MANAGEMENT::OPEN_MODAL_DELETE_MATCH';
export const CLOSE_MODAL_DELETE_MATCH = 'MATCH_MANAGEMENT::CLOSE_MODAL_DELETE_MATCH';

export type IAddMatchRequestAction = Action<typeof ADD_MATCH_REQUEST> & {
  payload: IAddMatchField
}
export type IAddMatchSuccessAction = Action<typeof ADD_MATCH_SUCCESS>
export type IAddMatchFailedAction = Action<typeof ADD_MATCH_FAILED>
export type IDeleteMatchRequestAction = Action<typeof DELETE_MATCH_REQUEST> & {
  payload: string
}
export type IDeleteMatchSuccessAction = Action<typeof DELETE_MATCH_SUCCESS>
export type IDeleteMatchFailedAction = Action<typeof DELETE_MATCH_FAILED>
export type IEditMatchRequestAction = Action<typeof EDIT_MATCH_REQUEST> & {
  payload: {
    matchInfo: IEditMatchArgument,
    id: string
  }
}
export type IEditMatchScoreRequestAction = Action<typeof EDIT_MATCH_SCORE_REQUEST> & {
  payload: {
    matchInfo: IEditMatchScoreArgument,
    id: string
  }
}
export type IEditMatchSuccessAction = Action<typeof EDIT_MATCH_SUCCESS>
export type IEditMatchFailedAction = Action<typeof EDIT_MATCH_FAILED>

// MODAL
export type IOpenModalAddMatchAction = Action<typeof OPEN_MODAL_ADD_MATCH>
export type ICloseModalAddMatchAction = Action<typeof CLOSE_MODAL_ADD_MATCH>
export type IOpenModalEditMatchAction = Action<typeof OPEN_MODAL_EDIT_MATCH> & {
  payload: IMatchInfo,
}
export type ICloseModalEditMatchAction = Action<typeof CLOSE_MODAL_EDIT_MATCH>
export type IOpenModalDeleteMatchAction = Action<typeof OPEN_MODAL_DELETE_MATCH> & {
  payload: IMatchInfo,
}
export type ICloseModalDeleteMatchAction = Action<typeof CLOSE_MODAL_DELETE_MATCH>

export const addMatchRequest = (data: IAddMatchField): IAddMatchRequestAction => {
  return { type: ADD_MATCH_REQUEST, payload: data };
};
export const addMatchSuccess = () : IAddMatchSuccessAction => {
  return { type: ADD_MATCH_SUCCESS };
};
export const addMatchFail = () : IAddMatchFailedAction => {
  return { type: ADD_MATCH_FAILED };
};
export const deleteMatchRequest = (teamId: string) : IDeleteMatchRequestAction => {
  return { type: DELETE_MATCH_REQUEST, payload: teamId };
};
export const deleteMatchSuccess = () : IDeleteMatchSuccessAction => {
  return { type: DELETE_MATCH_SUCCESS };
};
export const deleteMatchFail = () : IDeleteMatchFailedAction => {
  return { type: DELETE_MATCH_FAILED };
};
export const editMatchRequest = (matchInfo: IEditMatchArgument, id: string): IEditMatchRequestAction => {
  return { type: EDIT_MATCH_REQUEST, payload: { matchInfo, id } };
};
export const editMatchScoreRequest = (matchInfo: IEditMatchScoreArgument, id: string): IEditMatchScoreRequestAction => {
  return { type: EDIT_MATCH_SCORE_REQUEST, payload: { matchInfo, id } };
};
export const editMatchSuccess = () : IEditMatchSuccessAction => {
  return { type: EDIT_MATCH_SUCCESS };
};
export const editMatchFail = () : IEditMatchFailedAction => {
  return { type: EDIT_MATCH_FAILED };
};

// MODAL
export const openModalAddMatch = () : IOpenModalAddMatchAction => {
  return { type: OPEN_MODAL_ADD_MATCH };
};
export const closeModalAddMatch = () : ICloseModalAddMatchAction => {
  return { type: CLOSE_MODAL_ADD_MATCH };
};
export const openModalEditMatch = (match: IMatchInfo) : IOpenModalEditMatchAction => {
  return { type: OPEN_MODAL_EDIT_MATCH, payload: match };
};
export const closeModalEditMatch = () : ICloseModalEditMatchAction => {
  return { type: CLOSE_MODAL_EDIT_MATCH };
};
export const openModalDeleteMatch = (match: IMatchInfo) : IOpenModalDeleteMatchAction => {
  return { type: OPEN_MODAL_DELETE_MATCH, payload: match };
};
export const closeModalDeleteMatch = () : ICloseModalDeleteMatchAction => {
  return { type: CLOSE_MODAL_DELETE_MATCH };
};
