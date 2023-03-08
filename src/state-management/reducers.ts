import { combineReducers } from 'redux';
import leagueListReducer from '../modules/league-list/state/reducer';
import matchListReducer from '../modules/match-management/match-list/state/reducer';
import matchDetailReducer from '../modules/match-management/match-detail/state/reducer';
import betTeamReducer from '../modules/modal-bet/state/reducer';
import userListReducer from '../modules/user-management/user-list/state/reducer';
import userBettedStatisticReducer from '../modules/user-management/user-betted-statistic/state/reducer';
import authReducer from '../modules/authentication/state/reducer';
import manageUserReducer from '../modules/user-management/modals/state/reducer';
import manageTeamReducer from '../modules/team-management/modals/state/reducer';
import teamListReducer from '../modules/team-management/team-list/state/reducer';
import manageMatchReducer from '../modules/match-management/modals/state/reducer';
import userInformationReducer from '../modules/user-management/user-information/state/reducers';
import manageLeagueReducer from '../modules/league-management/modals/state/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	leagueList: leagueListReducer,
	matchList: matchListReducer,
	matchDetail: matchDetailReducer,
	betTeam: betTeamReducer,
	userList: userListReducer,
	teamList: teamListReducer,
	userBettedStatistic: userBettedStatisticReducer,
	manageMatch: manageMatchReducer,
	manageUser: manageUserReducer,
	manageTeam: manageTeamReducer,
	manageLeague: manageLeagueReducer,
	updateUser: userInformationReducer,
});
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
