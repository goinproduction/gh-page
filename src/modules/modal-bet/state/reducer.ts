import { AnyAction } from 'redux';
import { ITeamMatch } from '../../match-management/match-list/interfaces/match-list';
import * as betActions from './actions';

interface IBetTeamReducer {
  isModalVisible: boolean;
  currentTeamChoose: ITeamMatch | null;
  isLoading: boolean;
}

const initialState: IBetTeamReducer = {
  isModalVisible: false,
  currentTeamChoose: null,
  isLoading: false,
};

const betTeamReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case betActions.OPEN_MODAL_CONFIRM: {
      const currentTeamChooseOnModal = action.payload as ITeamMatch;
      return { ...state, isModalVisible: true, currentTeamChoose: currentTeamChooseOnModal };
    }
    case betActions.CLOSE_MODAL_CONFIRM: {
      return { ...state, isModalVisible: false };
    }
    case betActions.BET_TEAM_REQUEST: {
      return {
        ...state,
        isLoading: true,
       };
    }
    case betActions.BET_TEAM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case betActions.BET_TEAM_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
export default betTeamReducer;
