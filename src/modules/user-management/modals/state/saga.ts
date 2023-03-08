import { message } from 'antd';
import { BrowserHistory } from 'history';
import { call, fork, getContext, put, takeLatest } from 'redux-saga/effects';
import { USER_LIST_PAGE_SIZE } from '../../../../utils/constants/pagination';
import { formatNumberByBrowserLocale } from '../../../../utils/format-number-by-browser-locale';
import { IErrorResponse } from '../../../../utils/interfaces';
import { IGetUserListParams } from '../../user-list/interface/user-list';
import { getUserListRequest } from '../../user-list/state/actions';
import { ICheckoutData } from '../interfaces/manage-user';
import { ManageUserService } from '../manage-user-service';
import * as manageUserActions from './actions';

// reload user-list due to current page and search query
function* resetUserList() {
    const history: BrowserHistory = yield getContext('history');
    const queryParams = new URLSearchParams(history.location.search);
    const pageParam = queryParams.get('page');
    const userSearchParam = queryParams.get('userSearch');
    const userListParams: IGetUserListParams = {
        page: pageParam,
        limit: USER_LIST_PAGE_SIZE,
        query: userSearchParam,
    };
    yield put(getUserListRequest(userListParams));
}

function* checkout(action: manageUserActions.ICheckoutRequestAction) {
    try {
        const checkoutData: ICheckoutData = action.payload;
        yield call(ManageUserService.checkout, checkoutData);

        yield resetUserList();

        const amountVND = checkoutData.amount * 1000;
        const amountVNDString = formatNumberByBrowserLocale(amountVND);
        message.success(`${amountVNDString}VND has been added to fund`);
        yield put(manageUserActions.checkoutSuccess());
        yield put(manageUserActions.closeCheckoutModal());
    } catch (error) {
        yield put(manageUserActions.checkoutFailed());
        message.error((error as IErrorResponse).message);
    }
}

function* deleteUser(action: manageUserActions.IDeleteUserRequestAction) {
    try {
        const userId: string = action.payload;
        yield call(ManageUserService.deleteUser, userId);

        yield resetUserList();
        message.success('Delete user successfully');
        yield put(manageUserActions.deleteUserSuccess());
        yield put(manageUserActions.closeDeleteUserModal());
    } catch (error) {
        yield put(manageUserActions.deleteUserFailed());
        message.error((error as IErrorResponse).message);
    }
}

function* watchCheckoutRequest() {
    yield takeLatest(manageUserActions.CHECKOUT_REQUEST, checkout);
}

function* watchDeleteUserRequest() {
    yield takeLatest(manageUserActions.DELETE_USER_REQUEST, deleteUser);
}
const manageUserSagas = [fork(watchCheckoutRequest), fork(watchDeleteUserRequest)];

export default manageUserSagas;
