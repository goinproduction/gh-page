import { AnyAction } from 'redux';
import { defaultSelectedMatch } from '../../../../utils/constants/default-model';
import { IMatchInfo } from '../../match-list/interfaces/match-list';
import * as actions from './actions';

interface IInitialManageMatchState {
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
  currentMatchOnModal: IMatchInfo,
}

const initialState: IInitialManageMatchState = {
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
  currentMatchOnModal: defaultSelectedMatch,
};

const manageMatchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actions.ADD_MATCH_REQUEST:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: true,
        },
      };
    case actions.ADD_MATCH_SUCCESS:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: false,
        },
      };
    case actions.ADD_MATCH_FAILED:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: false,
        },
      };
    case actions.EDIT_MATCH_REQUEST:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: true,
        },
      };
    case actions.EDIT_MATCH_SCORE_REQUEST:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: true,
        },
      };
    case actions.EDIT_MATCH_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: false,
        },
      };
    case actions.EDIT_MATCH_FAILED:
      return {
        ...state,
        edit: {
          ...state.edit,
          isLoading: false,
        },
      };
    case actions.DELETE_MATCH_REQUEST:
      return {
        ...state,
        delete: {
          ...state.delete,
          isLoading: true,
        },
      };
    case actions.DELETE_MATCH_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          isLoading: false,
        },
      };
    case actions.DELETE_MATCH_FAILED:
      return {
        ...state,
        delete: {
          ...state.delete,
          isLoading: false,
        },
      };
    case actions.OPEN_MODAL_ADD_MATCH:
      return {
        ...state,
        add: {
          ...state.add,
          isVisible: true,
        },
      };
    case actions.CLOSE_MODAL_ADD_MATCH:
      return {
        ...state,
        add: {
          ...state.add,
          isVisible: false,
        },
      };
    case actions.OPEN_MODAL_EDIT_MATCH:
      return {
        ...state,
        edit: {
          ...state.edit,
          isVisible: true,
        },
        currentMatchOnModal: action.payload as IMatchInfo,
      };
    case actions.CLOSE_MODAL_EDIT_MATCH:
      return {
        ...state,
        edit: {
          ...state.edit,
          isVisible: false,
        },
      };
    case actions.OPEN_MODAL_DELETE_MATCH:
      return {
        ...state,
        delete: {
          ...state.delete,
          isVisible: true,
        },
        currentMatchOnModal: action.payload as IMatchInfo,
      };
    case actions.CLOSE_MODAL_DELETE_MATCH:
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
export default manageMatchReducer;
