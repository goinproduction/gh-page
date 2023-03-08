import { AnyAction } from 'redux';
import { ILeagueItem, ILeagueListResponse } from '../interfaces/league-list';
import * as filterActions from './action';

interface ILeagueListReducer {
  leagueList: Array<ILeagueItem>;
  isLoading: boolean;
  currentLeagueId: string
}

const initialState: ILeagueListReducer = {
  leagueList: [],
  isLoading: false,
  currentLeagueId: 'all',
};

const leagueListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case filterActions.GET_LEAGUE_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case filterActions.GET_LEAGUE_LIST_SUCCESS: {
      const data = action.payload as ILeagueListResponse;
      return {
        ...state,
        isLoading: false,
        leagueList: data.data,
      };
    }
    case filterActions.GET_LEAGUE_LIST_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case filterActions.CHOOSE_FILTER_LEAGUE: {
      const leagueId = action.payload as string;
      return { ...state, currentLeagueId: leagueId };
    }
    default:
      return { ...state };
  }
};
export default leagueListReducer;
