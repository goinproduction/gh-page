import { Route, Routes } from 'react-router-dom';
import AdminRoute from '../components/AdminRoute/AdminRoute';
import BrowserRouter from '../components/BrowserRouter/BrowserRouter';
import Layout from '../components/Layout/Layout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Overview from '../modules/admin/components/Overview/Overview';
import LoginForm from '../modules/authentication/Components/LoginForm';
import RegisterForm from '../modules/authentication/Components/RegisterForm';
import LeagueListTable from '../modules/league-list/components/LeagueListTable/LeagueListTable';
import MatchListTable from '../modules/match-management/match-list/components/MatchListTable/MatchListTable';
import TeamListContent from '../modules/team-management/team-list/components/TeamListContent/TeamListContent';
import UserBettedStatisticContent from '../modules/user-management/user-betted-statistic/components/UserBettedStatisticContent/UserBettedStatisticContent';
import ChangeAvatarForm from '../modules/user-management/user-information/components/ChangeAvatarForm/ChangeAvatarForm';
import ChangeInformationForm from '../modules/user-management/user-information/components/ChangeInformationForm/ChangeInformationForm';
import ChangePasswordForm from '../modules/user-management/user-information/components/ChangePasswordForm/ChangePasswordForm';
import UserListContent from '../modules/user-management/user-list/components/UserListContent/UserListContent';
import AdminPage from '../pages/Admin';
import BetPage from '../pages/Bet';
import HomePage from '../pages/Home';
import LoginLayout from '../pages/LoginLayout';
import MatchPage from '../pages/Match';
import NotFound from '../pages/NotFound';
import Policy from '../pages/Policy';
import Rules from '../pages/Rules';
import Terms from '../pages/Terms';
import UserInformationLayout from '../pages/UserInformationLayout';
import { routes } from '../utils/config/routes';
import { history } from '../utils/history';

const AppRoutes = () => {
	return (
		<BrowserRouter history={history}>
			<Routes>
				<Route element={<Layout />}>
					<Route path={routes.homePath} element={<HomePage />} />
					<Route path={routes.matchPath} element={<MatchPage />} />
					<Route path={routes.matchDetailPath} element={<BetPage />} />
					<Route path={routes.rulesPath} element={<Rules />} />
					<Route path={routes.termsPath} element={<Terms />} />
					<Route path={routes.policyPath} element={<Policy />} />
					<Route element={<ProtectedRoute />}>
						<Route path={routes.userPath} element={<UserInformationLayout />}>
							<Route index element={<ChangeInformationForm />} />
							<Route path={routes.userUpdateInformationPath} element={<ChangeInformationForm />} />
							<Route path={routes.userUpdateAvatarPath} element={<ChangeAvatarForm />} />
							<Route path={routes.userUpdatePasswordPath} element={<ChangePasswordForm />} />
						</Route>
						<Route path={routes.userBettedStatisticPath} element={<UserBettedStatisticContent />} />
					</Route>
				</Route>
				<Route element={<AdminRoute />}>
					<Route path={routes.adminPath} element={<AdminPage />}>
						<Route index element={<Overview />} />
						<Route path={routes.adminMatchPath} element={<MatchListTable />} />
						<Route path={routes.adminUserPath} element={<UserListContent />} />
						<Route path={routes.adminTeamPath} element={<TeamListContent />} />
						<Route path={routes.adminLeaguePath} element={<LeagueListTable />} />
					</Route>
				</Route>
				<Route element={<LoginLayout />}>
					<Route path={routes.loginPath} element={<LoginForm />} />
					<Route path={routes.registerPath} element={<RegisterForm />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default AppRoutes;
