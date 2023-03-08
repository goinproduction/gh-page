import { Action } from 'redux';
import { IUserItem } from '../../user-list/interface/user-list';
import { ICheckoutData } from '../interfaces/manage-user';

// Action Checkout
export const OPEN_CHECKOUT_MODAL = 'USER_MANAGEMENT::OPEN_CHECKOUT_MODAL';
export const CLOSE_CHECKOUT_MODAL = 'USER_MANAGEMENT::CLOSE_CHECKOUT_MODAL';
export const CHECKOUT_REQUEST = 'USER_MANAGEMENT::CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'USER_MANAGEMENT::CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'USER_MANAGEMENT::CHECKOUT_FAILED';

// Action Delete User
export const OPEN_DELETE_USER_MODAL = 'USER_MANAGEMENT::OPEN_DELETE_USER_MODAL';
export const CLOSE_DELETE_USER_MODAL = 'USER_MANAGEMENT::CLOSE_DELETE_USER_MODAL';
export const DELETE_USER_REQUEST = 'USER_MANAGEMENT::DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'USER_MANAGEMENT::DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'USER_MANAGEMENT::DELETE_USER_FAILED';

// type action checkout
export type IOpenCheckoutModalAction = Action<typeof OPEN_CHECKOUT_MODAL> &
{ payload: IUserItem }

export type ICloseCheckoutModalAction = Action<typeof CLOSE_CHECKOUT_MODAL>

export type ICheckoutRequestAction = Action<typeof CHECKOUT_REQUEST> &
{ payload: ICheckoutData }

export type ICheckoutSuccessAction = Action<typeof CHECKOUT_SUCCESS>

export type ICheckoutFailedAction = Action<typeof CHECKOUT_FAILED>

// type action delete user
export type IOpenDeleteUserModalAction = Action<typeof OPEN_DELETE_USER_MODAL> &
{ payload: IUserItem }

export type ICloseDeleteUserModalAction = Action<typeof CLOSE_DELETE_USER_MODAL>

export type IDeleteUserRequestAction = Action<typeof DELETE_USER_REQUEST> &
{ payload: string}

export type IDeleteUserSuccessAction = Action<typeof DELETE_USER_SUCCESS>

export type IDeleteUserFailedAction = Action<typeof DELETE_USER_FAILED>

// Action Checkout
export const openCheckoutModal = (userItem: IUserItem): IOpenCheckoutModalAction => {
    return { type: OPEN_CHECKOUT_MODAL, payload: userItem };
};

export const closeCheckoutModal = (): ICloseCheckoutModalAction => {
    return { type: CLOSE_CHECKOUT_MODAL };
};

export const checkoutRequest = (data: ICheckoutData): ICheckoutRequestAction => {
    return { type: CHECKOUT_REQUEST, payload: data };
};

export const checkoutSuccess = (): ICheckoutSuccessAction => {
    return { type: CHECKOUT_SUCCESS };
};

export const checkoutFailed = (): ICheckoutFailedAction => {
    return { type: CHECKOUT_FAILED };
};

// Action Delete User
export const openDeleteUserModal = (userItem: IUserItem): IOpenDeleteUserModalAction => {
    return { type: OPEN_DELETE_USER_MODAL, payload: userItem };
};

export const closeDeleteUserModal = (): ICloseDeleteUserModalAction => {
    return { type: CLOSE_DELETE_USER_MODAL };
};

export const deleteUserRequest = (userId: string): IDeleteUserRequestAction => {
    return { type: DELETE_USER_REQUEST, payload: userId };
};

export const deleteUserSuccess = (): IDeleteUserSuccessAction => {
    return { type: DELETE_USER_SUCCESS };
};

export const deleteUserFailed = (): IDeleteUserFailedAction => {
    return { type: DELETE_USER_FAILED };
};
