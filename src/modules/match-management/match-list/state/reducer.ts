import { AnyAction } from 'redux';
import { IMatchItem, IResponseMatchList } from '../interfaces/match-list';
import * as matchListActions from './actions';

interface IModalAddMatchReducer {
  isLoading: boolean;
  matchList: Array<IMatchItem>;
  totalItem: number;
}

const initialState: IModalAddMatchReducer = {
  isLoading: false,
  matchList: [],
  totalItem: 0,
};

const matchListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case matchListActions.GET_MATCH_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case matchListActions.GET_MATCH_LIST_SUCCESS: {
      const { data } = action.payload as IResponseMatchList;
      return {
        ...state,
        isLoading: false,
        matchList: data.data,
        totalItem: data.page.total,
      };
    }
    case matchListActions.GET_MATCH_LIST_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
export default matchListReducer;
