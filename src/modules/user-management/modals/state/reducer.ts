import { AnyAction } from 'redux';
import { IUserItem } from '../../user-list/interface/user-list';
import * as manageUserActions from './actions';

interface IManageUserReducer {
    currentUserOnModal: IUserItem | null;
    checkout: {
        isVisible: boolean;
        isLoading: boolean;
    };
    deleteUser: {
        isVisible: boolean;
        isLoading: boolean;
    }
}

const initialState: IManageUserReducer = {
    currentUserOnModal: null,
    checkout: {
        isVisible: false,
        isLoading: false,
    },
    deleteUser: {
        isVisible: false,
        isLoading: false,
    },
};

const manageUserReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        // case checkout
        case manageUserActions.OPEN_CHECKOUT_MODAL: {
            const user = action.payload as IUserItem;
            return {
                ...state,
                currentUserOnModal: user,
                checkout: {
                    ...state.checkout,
                    isVisible: true,
                },
            };
        }
        case manageUserActions.CLOSE_CHECKOUT_MODAL: {
            return {
                ...state,
                currentUserOnModal: null,
                checkout: {
                    ...state.checkout,
                    isVisible: false,
                },
            };
        }
        case manageUserActions.CHECKOUT_REQUEST: {
            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    isLoading: true,
                },
            };
        }
        case manageUserActions.CHECKOUT_SUCCESS: {
            return {
                ...state,
                currentUserOnModal: null,
                checkout: {
                    ...state.checkout,
                    isLoading: false,
                },
            };
        }
        case manageUserActions.CHECKOUT_FAILED: {
            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    isLoading: false,
                },
            };
        }
        // case delete user
        case manageUserActions.OPEN_DELETE_USER_MODAL: {
            const user = action.payload as IUserItem;
            return {
                ...state,
                currentUserOnModal: user,
                deleteUser: {
                    ...state.deleteUser,
                    isVisible: true,
                },
            };
        }
        case manageUserActions.CLOSE_DELETE_USER_MODAL: {
            return {
                ...state,
                currentUserOnModal: null,
                deleteUser: {
                    ...state.deleteUser,
                    isVisible: false,
                },
            };
        }
        case manageUserActions.DELETE_USER_REQUEST: {
            return {
                ...state,
                deleteUser: {
                    ...state.deleteUser,
                    isLoading: true,
                },
            };
        }
        case manageUserActions.DELETE_USER_SUCCESS: {
            return {
                ...state,
                currentUserOnModal: null,
                deleteUser: {
                    ...state.deleteUser,
                    isLoading: false,
                },
            };
        }
        case manageUserActions.DELETE_USER_FAILED: {
            return {
                ...state,
                deleteUser: {
                    ...state.deleteUser,
                    isLoading: false,
                },
            };
        }
        default:
            return { ...state };
    }
};

export default manageUserReducer;
