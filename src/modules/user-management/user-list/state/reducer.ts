import { AnyAction } from 'redux';
import { IResponseUserList, IUserItem } from '../interface/user-list';
import * as userListActions from './actions';

interface IUserListReducer {
  isLoading: boolean;
  userList: Array<IUserItem>;
  totalItem: number;
}

const initialState: IUserListReducer = {
  isLoading: false,
  userList: [],
  totalItem: 0,
};

const userListReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case userListActions.GET_USER_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case userListActions.GET_USER_LIST_SUCCESS: {
      const { data } = action.payload as IResponseUserList;
      return {
        ...state,
        isLoading: false,
        userList: data.data,
        totalItem: data.page.total,
      };
    }
    case userListActions.GET_USER_LIST_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
export default userListReducer;
