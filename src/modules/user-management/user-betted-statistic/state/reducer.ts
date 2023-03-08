import { AnyAction } from 'redux';
import { IUserBettedStatisticResponse } from '../interfaces/user-betted-statistic';
import * as userBettedStatisticActions from './actions';

interface IUserBettedStatisticReducer {
  isLoading: boolean;
  userBettedStatisticResponse: IUserBettedStatisticResponse | null
}

const initialState: IUserBettedStatisticReducer = {
  isLoading: false,
  userBettedStatisticResponse: null,
};

const userBettedStatisticReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case userBettedStatisticActions.GET_USER_BETTED_STATISTIC_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case userBettedStatisticActions.GET_USER_BETTED_STATISTIC_SUCCESS: {
      const userBettedStatisticResponseLoaded = action.payload as IUserBettedStatisticResponse;
      return {
        ...state,
        isLoading: false,
        userBettedStatisticResponse: userBettedStatisticResponseLoaded,
      };
    }
    case userBettedStatisticActions.GET_USER_BETTED_STATISTIC_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
export default userBettedStatisticReducer;
