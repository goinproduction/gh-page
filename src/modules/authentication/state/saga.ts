/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { message, Modal } from 'antd';
import { BrowserHistory } from 'history';
import { call, fork, getContext, put, takeLatest } from 'redux-saga/effects';
import { routes } from '../../../utils/config/routes';
import { roles } from '../../../utils/constants/role';
import { IErrorResponse } from '../../../utils/interfaces';
import { showNotification } from '../../../utils/notification';
import { getAccessToken, removeAccessToken, setAccessToken } from '../../../utils/token-config';
import { ILoginField, IRegisterField, IRegisterResponse, IUserDataResponse } from '../interfaces/authentication';
import * as userActions from './action';
import { IRegisterUserRequestAction, ILoginUserRequestAction } from './action';
import * as authApi from './api';

function* loginRequest(action: ILoginUserRequestAction) {
    const userData: ILoginField = action.payload;
    try {
        const response: IUserDataResponse = yield call(authApi.loginAPI, userData);
        const history: BrowserHistory = yield getContext('history');
        yield put(userActions.loginUserSuccess(response));
        setAccessToken(response.data.accessToken);
        if (response.data.user.role === roles.ADMIN_ROLE) {
            history.push(routes.adminPath);
        } else {
            history.push(routes.homePath);
        }
        message.success('Login sucess');
    } catch (error) {
        yield put(userActions.loginUserFail(error as IErrorResponse));
        Modal.error({
            title: 'Error',
            content: (error as IErrorResponse).message,
        });
    }
}
function* registerRequest(action: IRegisterUserRequestAction) {
    try {
        const userInfo: IRegisterField = action.payload;
        const response: IRegisterResponse = yield call(authApi.registerAPI, userInfo);
        const history: BrowserHistory = yield getContext('history');
        yield put(userActions.registerUserSuccess(response));
        message.success(response.message);
        history.push(routes.loginPath);
    } catch (error) {
        yield put(userActions.registerUserFail((error as IErrorResponse)));
        Modal.error({
            title: 'Error',
            content: (error as IErrorResponse).message,
        });
    }
}
function* handleLogout() {
    const history: BrowserHistory = yield getContext('history');
    history.push(routes.homePath);
    removeAccessToken();
}
function* decodeToken() {
    try {
        if (getAccessToken()) {
            const response: IUserDataResponse = yield call(authApi.decodeToken);
            yield put(userActions.loginUserSuccess(response));
        }
    } catch (error) {
        removeAccessToken();
        yield put(userActions.loginUserFail(error as IErrorResponse));
        showNotification('error', (error as IErrorResponse).message, 'Your login session has expired');
    }
}
function* watchLoginRequest() {
    yield decodeToken();
    yield takeLatest(userActions.LOGIN_USER_REQUEST, loginRequest);
}
function* watchRegisterRequest() {
    yield takeLatest(userActions.REGISTER_USER_REQUEST, registerRequest);
}
function* watchLogout() {
    yield takeLatest(userActions.LOGOUT_USER, handleLogout);
}
const authSagas = [fork(watchLoginRequest), fork(watchRegisterRequest), fork(watchLogout)];

export default authSagas;
