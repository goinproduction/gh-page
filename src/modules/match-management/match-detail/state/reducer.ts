import { AnyAction } from 'redux';
import { IBetResponse } from '../../../modal-bet/interfaces/modal-bet';
import { IMatchDetail } from '../interfaces/match-detail';
import * as matchDetailActions from './actions';

interface IMatchDetailReducer {
  isLoading: boolean;
  matchDetail: IMatchDetail | null;
  teamUserBet: string | null;
  teamBetQuantity: number[];
}

const initialState: IMatchDetailReducer = {
  isLoading: false,
  matchDetail: null,
  teamUserBet: null,
  teamBetQuantity: [],
};

const matchDetailReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case matchDetailActions.GET_MATCH_DETAIL_REQUEST: {
      return { ...state, isLoading: true };
    }
    case matchDetailActions.GET_MATCH_DETAIL_SUCCESS: {
      const data = action.payload as IMatchDetail;
      return {
        ...state,
        isLoading: false,
        matchDetail: data,
        teamUserBet: data.data.teamUserBet,
        teamBetQuantity: data.data.match.teamBetQuantity,
      };
    }
    case matchDetailActions.GET_MATCH_DETAIL_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case matchDetailActions.CHANGE_TEAM_USER_BET: {
      const response = action.payload as IBetResponse;
      return {
        ...state,
        teamUserBet: response.data.teamBet,
        teamBetQuantity: response.data.match.teamBetQuantity,
      };
    }
    default:
      return { ...state };
  }
};
export default matchDetailReducer;
