import { AnyAction } from 'redux';
import { getAccessToken } from '../../../utils/token-config';
import { IUserDataResponse, IUserInfo } from '../interfaces/authentication';
import * as userActions from './action';

interface IUserReducer {
	isLoading: boolean;
	isLoggedIn: boolean;
	userInfo: IUserInfo
}
const initialUserInfo : IUserInfo = {
	id: 0,
	username: '',
	email: '',
	fullName: '',
	phoneNumber: 0,
	avatar: '',
	role: '',
	win: 0,
	lose: 0,
	winRate: 0,
	debt: 0,
	isActive: false,
};
const initialState: IUserReducer = {
	isLoading: !!getAccessToken(),
	isLoggedIn: false,
	userInfo: initialUserInfo,
};

const authReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case userActions.LOGIN_USER_REQUEST: {
			return { ...state, isLoading: true };
		}
		case userActions.LOGIN_USER_SUCCESS: {
			const userDataLoaded = action.payload as IUserDataResponse;
			return {
				...state,
				isLoading: false,
				userInfo: { ...userDataLoaded.data.user },
				isLoggedIn: true,
			};
		}
		case userActions.LOGIN_USER_FAILED: {
			return { ...state, isLoading: false };
		}
		case userActions.REGISTER_USER_REQUEST: {
			return { ...state, isLoading: true };
		}
		case userActions.REGISTER_USER_SUCCESS: {
			return { ...state, isLoading: false };
		}
		case userActions.REGISTER_USER_FAILED: {
			return { ...state, isLoading: false };
		}
		case userActions.DECODE_TOKEN_REQUEST: {
			return { ...state, isLoading: true };
		}
		case userActions.LOGOUT_USER: {
			return { ...state, userInfo: { ...initialUserInfo }, isLoggedIn: false };
		}
		default:
			return { ...state };
	}
};

export default authReducer;
