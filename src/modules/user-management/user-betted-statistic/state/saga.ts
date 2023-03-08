import { notification } from 'antd';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IErrorResponse } from '../../../../utils/interfaces';
import { IUserBettedStatisticResponse } from '../interfaces/user-betted-statistic';
import * as service from '../user-betted-statistic-service';
import * as userBettedStatisticActions from './actions';

export function* getUserBettedStatistic(action: userBettedStatisticActions.IGetUserBettedStatisticRequestAction) {
  try {
    // call api
    const pageParams = action.payload;
    const userBettedStatisticResponse: IUserBettedStatisticResponse = yield call(service.getUserBettedStatistic, pageParams);
    // put Action
    yield put(userBettedStatisticActions.getUserBettedStatisticSuccess(userBettedStatisticResponse));
  } catch (error) {
    const errorMessage = 'Failed to get user betted statistic';
    const descriptionError = (error as IErrorResponse).message;
    notification.error({
      message: errorMessage,
      description: descriptionError,
      duration: 10,
      placement: 'bottomRight',
    });
  }
}

function* watchGetUserBettedStatisticRequest() {
  yield takeLatest(userBettedStatisticActions.GET_USER_BETTED_STATISTIC_REQUEST, getUserBettedStatistic);
}

const userBettedStatisticSagas = [fork(watchGetUserBettedStatisticRequest)];

export default userBettedStatisticSagas;
