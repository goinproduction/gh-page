import { Action } from 'redux';
import { IEditUserInfoField, IUpdateUserPasswordField } from '../interfaces/user-information';

export const UPDATE_USER_INFORMATION_REQUEST = 'UPDATE_USER_INFORMATION_REQUEST';
export const UPDATE_USER_INFORMATION_SUCCESS = 'UPDATE_USER_INFORMATION_SUCCESS';
export const UPDATE_USER_INFORMATION_FAIL = 'UPDATE_USER_INFORMATION_FAIL';
export const UPDATE_USER_AVATAR_REQUEST = 'UPDATE_USER_AVATAR_REQUEST';
export const UPDATE_USER_AVATAR_SUCCESS = 'UPDATE_USER_AVATAR_SUCCESS';
export const UPDATE_USER_AVATAR_FAIL = 'UPDATE_USER_AVATAR_FAIL';
export const UPDATE_USER_PASSWORD_REQUEST = 'UPDATE_USER_PASSWORD_REQUEST';
export const UPDATE_USER_PASSWORD_SUCCESS = 'UPDATE_USER_PASSWORD_SUCCESS';
export const UPDATE_USER_PASSWORD_FAIL = 'UPDATE_USER_PASSWORD_FAIL';
export type IUpdateUserInformationAction = Action<typeof UPDATE_USER_INFORMATION_REQUEST> & {
    payload: {
        userInfo: IEditUserInfoField,
        userId: number,
    }
};
export type IUpdateUserInformationSuccessAction = Action<typeof UPDATE_USER_INFORMATION_SUCCESS>;
export type IUpdateUserInformationFailAction = Action<typeof UPDATE_USER_INFORMATION_FAIL>;
export type IUpdateUserAvatarAction = Action<typeof UPDATE_USER_AVATAR_REQUEST> & {
    payload: {
        avatar: File,
        userId: number,
    }
};
export type IUpdateUserAvatarSuccessAction = Action<typeof UPDATE_USER_AVATAR_SUCCESS>;
export type IUpdateUserAvatarFailAction = Action<typeof UPDATE_USER_AVATAR_FAIL>;

export type IUpdateUserPasswordAction = Action<typeof UPDATE_USER_PASSWORD_REQUEST> & {
    payload: IUpdateUserPasswordField
};
export type IUpdateUserPasswordSuccessAction = Action<typeof UPDATE_USER_PASSWORD_SUCCESS>;
export type IUpdateUserPasswordFailAction = Action<typeof UPDATE_USER_PASSWORD_FAIL>;

export const updateUserInformationRequest = (userInfo: IEditUserInfoField, userId: number) : IUpdateUserInformationAction => {
    return { type: UPDATE_USER_INFORMATION_REQUEST, payload: { userInfo, userId } };
};

export const updateUserInformationSuccess = () => {
    return { type: UPDATE_USER_INFORMATION_SUCCESS };
};
export const updateUserInformationFail = () => {
    return { type: UPDATE_USER_INFORMATION_FAIL };
};
export const updateUserAvatarRequest = (avatar: File, userId: number) : IUpdateUserAvatarAction => {
    return { type: UPDATE_USER_AVATAR_REQUEST, payload: { avatar, userId } };
};
export const updateUserAvatarSuccess = () => {
    return { type: UPDATE_USER_AVATAR_SUCCESS };
};
export const updateUserAvatarFail = () => {
    return { type: UPDATE_USER_AVATAR_FAIL };
};
export const updateUserPasswordRequest = (data: IUpdateUserPasswordField) : IUpdateUserPasswordAction => {
    return { type: UPDATE_USER_PASSWORD_REQUEST, payload: data };
};
export const updateUserPasswordSuccess = () => {
    return { type: UPDATE_USER_PASSWORD_SUCCESS };
};
export const updateUserPasswordFail = () => {
    return { type: UPDATE_USER_PASSWORD_FAIL };
};
