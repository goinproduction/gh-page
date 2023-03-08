import { AnyAction } from 'redux';
import * as actions from './actions';

interface IInitialManageLeagueState {
  delete: {
    isLoading: boolean,
    isVisible: boolean,
  },
  edit: {
    isLoading: boolean,
    isVisible: boolean,
  },
  add: {
    isLoading: boolean,
    isVisible: boolean,
  },
}

const initialState: IInitialManageLeagueState = {
  delete: {
    isLoading: false,
    isVisible: false,
  },
  edit: {
    isLoading: false,
    isVisible: false,
  },
  add: {
    isLoading: false,
    isVisible: false,
  },
};

const manageLeagueReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actions.ADD_LEAGUE_REQUEST:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: true,
        },
      };
    case actions.ADD_LEAGUE_SUCCESS:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: false,
        },
      };
    case actions.ADD_LEAGUE_FAILED:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: false,
        },
      };
    case actions.EDIT_LEAGUE_REQUEST:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: true,
        },
      };
    case actions.EDIT_LEAGUE_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: false,
        },
      };
    case actions.EDIT_LEAGUE_FAILED:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: false,
        },
      };
    case actions.DELETE_LEAGUE_REQUEST:
      return {
        ...state,
        delete: {
          ...state.delete,
          isLoading: true,
        },
      };
    case actions.DELETE_LEAGUE_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          isLoading: false,
        },
      };
    case actions.DELETE_LEAGUE_FAILED:
      return {
        ...state,
        delete: {
          ...state.delete,
          isLoading: false,
        },
      };
    case actions.OPEN_MODAL_ADD_LEAGUE:
      return {
        ...state,
        add: {
          ...state.add,
          isVisible: true,
        },
      };
    case actions.CLOSE_MODAL_ADD_LEAGUE:
      return {
        ...state,
        add: {
          ...state.add,
          isVisible: false,
        },
      };
    case actions.OPEN_MODAL_EDIT_LEAGUE:
      return {
        ...state,
        edit: {
          ...state.edit,
          isVisible: true,
        },
      };
    case actions.CLOSE_MODAL_EDIT_LEAGUE:
      return {
        ...state,
        edit: {
          ...state.edit,
          isVisible: false,
        },
      };
    case actions.OPEN_MODAL_DELETE_LEAGUE:
      return {
        ...state,
        delete: {
          ...state.delete,
          isVisible: true,
        },
      };
    case actions.CLOSE_MODAL_DELETE_LEAGUE:
      return {
        ...state,
        delete: {
          ...state.delete,
          isVisible: false,
        },
      };
    default:
      return { ...state };
  }
};
export default manageLeagueReducer;
