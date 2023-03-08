/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { message, Modal } from 'antd';
import { BrowserHistory } from 'history';
import { call, fork, getContext, put, takeLatest } from 'redux-saga/effects';
import { routes } from '../../../../utils/config/routes';
import { IErrorResponse } from '../../../../utils/interfaces';
import { setAccessToken } from '../../../../utils/token-config';
import { IUserDataResponse } from '../../../authentication/interfaces/authentication';
import { loginUserSuccess, logoutUser } from '../../../authentication/state/action';
import { UserInformationService } from '../components/user-information-service';
import { IUpdateUserPasswordResponse } from '../interfaces/user-information';
import * as userActions from './actions';

function* updateUserInfo(action: userActions.IUpdateUserInformationAction) {
  try {
    const { userInfo, userId } = action.payload;
    const response: IUserDataResponse = yield call(UserInformationService.updateUserInfo, userInfo, userId);
    yield put(userActions.updateUserInformationSuccess());
    yield put(loginUserSuccess(response));
    setAccessToken(response.data.accessToken);
    message.success('Update user information success');
  } catch (error) {
    message.error('Fail to update');
    yield put(userActions.updateUserInformationFail());
  }
}
function* updateUserAvatar(action: userActions.IUpdateUserAvatarAction) {
  try {
    const { avatar, userId } = action.payload;
    const response: IUserDataResponse = yield call(UserInformationService.updateUserAvatar, avatar, userId);
    yield put(userActions.updateUserAvatarSuccess());
    yield put(loginUserSuccess(response));
    setAccessToken(response.data.accessToken);
    Modal.success({
      title: 'Success',
      content: 'Update user avatar success',
    });
  } catch (error) {
    message.error('Fail to update');
    message.error((error as IErrorResponse).message);
    yield put(userActions.updateUserAvatarFail());
  }
}
function* updateUserPassword(action: userActions.IUpdateUserPasswordAction) {
  try {
    const userPassword = action.payload;
    const response: IUpdateUserPasswordResponse = yield call(UserInformationService.updateUserPassword, userPassword);
    yield put(userActions.updateUserPasswordSuccess());
    const history : BrowserHistory = yield getContext('history');
    Modal.success({
      title: response.message,
      content: 'Please login again',
    });
    yield put(logoutUser());
    history.push(routes.loginPath);
  } catch (error) {
    Modal.error({
      title: 'Error',
      content: (error as IErrorResponse).message,
    });
    yield put(userActions.updateUserPasswordFail());
  }
}
function* watchUpdateUserInfoRequest() {
  yield takeLatest(userActions.UPDATE_USER_INFORMATION_REQUEST, updateUserInfo);
}
function* watchUpdateUserAvatar() {
  yield takeLatest(userActions.UPDATE_USER_AVATAR_REQUEST, updateUserAvatar);
}
function* watchUpdateUserPassword() {
  yield takeLatest(userActions.UPDATE_USER_PASSWORD_REQUEST, updateUserPassword);
}
const userInformationSagas = [fork(watchUpdateUserInfoRequest), fork(watchUpdateUserAvatar), fork(watchUpdateUserPassword)];

export default userInformationSagas;
