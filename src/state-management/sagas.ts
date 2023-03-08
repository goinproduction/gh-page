import { all } from 'redux-saga/effects';
import leagueSagas from '../modules/league-list/state/saga';
import authSaga from '../modules/authentication/state/saga';
import matchListSagas from '../modules/match-management/match-list/state/saga';
import matchDetailSagas from '../modules/match-management/match-detail/state/saga';
import betTeamSagas from '../modules/modal-bet/state/saga';
import userListSagas from '../modules/user-management/user-list/state/saga';
import userBettedStatisticSagas from '../modules/user-management/user-betted-statistic/state/saga';
import manageUserSagas from '../modules/user-management/modals/state/saga';
import teamListSagas from '../modules/team-management/team-list/state/saga';
import manageTeamSaga from '../modules/team-management/modals/state/saga';
import manageMatchSagas from '../modules/match-management/modals/state/saga';
import userInformationSagas from '../modules/user-management/user-information/state/saga';
import manageLeagueSagas from '../modules/league-management/modals/state/saga';

function* rootSaga() {
	yield all([...authSaga,
	...leagueSagas,
	...matchListSagas,
	...matchDetailSagas,
	...betTeamSagas,
	...userBettedStatisticSagas,
	...userListSagas,
	...teamListSagas,
	...manageMatchSagas,
	...manageUserSagas,
	...manageTeamSaga,
	...manageLeagueSagas,
	...userInformationSagas]);
}
export default rootSaga;
