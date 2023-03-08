import { AnyAction } from 'redux';
import * as userActions from './actions';

interface IUserInformationReducer {
  password: {
    isLoading: boolean;
  };
  avatar: {
    isLoading: boolean;
  };
  info: {
    isLoading: boolean;
  }
}

const initialState: IUserInformationReducer = {
  password: {
    isLoading: false,
  },
  avatar: {
    isLoading: false,
  },
  info: {
    isLoading: false,
  },
};

const userInformationReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case userActions.UPDATE_USER_INFORMATION_REQUEST: {
      return {
        ...state,
        info: {
          ...state.info,
          isLoading: true,
        },
      };
    }
    case userActions.UPDATE_USER_INFORMATION_SUCCESS: {
      return {
        ...state,
        info: {
          ...state.info,
          isLoading: false,
        },
      };
    }
    case userActions.UPDATE_USER_INFORMATION_FAIL: {
      return {
        ...state,
        info: {
          ...state.info,
          isLoading: false,
        },
      };
    }
    case userActions.UPDATE_USER_AVATAR_REQUEST: {
      return {
        ...state,
        avatar: {
          ...state.avatar,
          isLoading: true,
        },
      };
    }
    case userActions.UPDATE_USER_AVATAR_SUCCESS: {
      return {
        ...state,
        avatar: {
          ...state.avatar,
          isLoading: false,
        },
      };
    }
    case userActions.UPDATE_USER_AVATAR_FAIL: {
      return {
        ...state,
        avatar: {
          ...state.avatar,
          isLoading: false,
        },
      };
    }
    case userActions.UPDATE_USER_PASSWORD_REQUEST: {
      return {
        ...state,
        password: {
          ...state.password,
          isLoading: true,
        },
      };
    }
    case userActions.UPDATE_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        password: {
          ...state.password,
          isLoading: false,
        },
      };
    }
    case userActions.UPDATE_USER_PASSWORD_FAIL: {
      return {
        ...state,
        password: {
          ...state.password,
          isLoading: false,
        },
      };
    }
    default:
      return { ...state };
  }
};
export default userInformationReducer;
