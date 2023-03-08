import { AnyAction } from 'redux';
import { IResponseTeamList, ITeamItem } from '../interfaces/team-list';
import * as teamListActions from './actions';

interface ITeamListReducer {
  isLoading: boolean;
  teamList: Array<ITeamItem>;
  totalItem: number;
}

const initialState: ITeamListReducer = {
  isLoading: false,
  teamList: [],
  totalItem: 0,
};

const teamListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case teamListActions.GET_TEAM_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case teamListActions.GET_TEAM_LIST_SUCCESS: {
      const { data } = action.payload as IResponseTeamList;
      return {
        ...state,
        isLoading: false,
        teamList: data.data,
        totalItem: data.page.total,
      };
    }
    case teamListActions.GET_TEAM_LIST_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
export default teamListReducer;
