import { Action } from 'redux';
import { IErrorResponse } from '../../../utils/interfaces';
import { ILoginField, IRegisterField, IRegisterResponse, IUserDataResponse } from '../interfaces/authentication';

export const DECODE_TOKEN_REQUEST = 'DECODE_TOKEN_REQUEST';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const LOGIN_GOOGLE_REQUEST = 'LOGIN_GOOGLE_REQUEST';
export const LOGIN_GOOGLE_SUCCESS = 'LOGIN_GOOGLE_SUCCESS';
export const LOGIN_GOOGLE_FAILED = 'LOGIN_GOOGLE_FAILED';
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const LOGOUT_USER = 'LOGOUT_USER';

export type ILoginUserRequestAction = Action<typeof LOGIN_USER_REQUEST> & { payload: ILoginField };
export type ILoginUserSuccessAction = Action<typeof LOGIN_USER_SUCCESS> & { payload: IUserDataResponse };
export type ILoginUserFailAction = Action<typeof LOGIN_USER_FAILED> & { payload: IErrorResponse };
export type ILoginGoogleRequestAction = Action<typeof LOGIN_GOOGLE_REQUEST>;
export type ILoginGoogleSuccessAction = Action<typeof LOGIN_GOOGLE_SUCCESS> & { payload: IUserDataResponse };
export type ILoginGoogleFailAction = Action<typeof LOGIN_GOOGLE_FAILED> & { payload: IErrorResponse };
export type IDecodeTokenAction = Action<typeof DECODE_TOKEN_REQUEST>
export type ILogoutUserAction = Action<typeof LOGOUT_USER>
export type IRegisterUserRequestAction = Action<typeof REGISTER_USER_REQUEST> & { payload: IRegisterField };
export type IRegisterUserSuccessAction = Action<typeof REGISTER_USER_SUCCESS> & { payload: IRegisterResponse };
export type IRegisterUserFailAction = Action<typeof REGISTER_USER_FAILED> & { payload: IErrorResponse };

export const loginUserRequest = (data : ILoginField) :ILoginUserRequestAction => {
    return { type: LOGIN_USER_REQUEST, payload: data };
};
export const loginUserSuccess = (data : IUserDataResponse) : ILoginUserSuccessAction => {
    return { type: LOGIN_USER_SUCCESS, payload: data };
};
export const loginUserFail = (data: IErrorResponse) : ILoginUserFailAction => {
    return { type: LOGIN_USER_FAILED, payload: data };
};
export const loginGoogle = () => {
    return { type: LOGIN_GOOGLE_REQUEST };
};
export const registerUser = (data: IRegisterField) :IRegisterUserRequestAction => {
    return { type: REGISTER_USER_REQUEST, payload: data };
};
export const registerUserRequest = (data: IRegisterField) : IRegisterUserRequestAction => {
    return { type: REGISTER_USER_REQUEST, payload: data };
};
export const registerUserSuccess = (data : IRegisterResponse) : IRegisterUserSuccessAction => {
    return { type: REGISTER_USER_SUCCESS, payload: data };
};
export const registerUserFail = (data: IErrorResponse) : IRegisterUserFailAction => {
    return { type: REGISTER_USER_FAILED, payload: data };
};
export const decodeTokenRequest = () : IDecodeTokenAction => {
    return { type: DECODE_TOKEN_REQUEST };
};
export const logoutUser = () : ILogoutUserAction => {
    return { type: LOGOUT_USER };
};
