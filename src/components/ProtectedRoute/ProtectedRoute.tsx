import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { State } from '../../state-management/reducers';
import { routes } from '../../utils/config/routes';
import { getAccessToken } from '../../utils/token-config';
import Loading from '../Loading/Loading';

const ProtectedRoute = () => {
    const { isLoggedIn, isLoading } = useSelector((state : State) => state.auth);
    if (getAccessToken()) {
        if (!isLoading && !isLoggedIn) {
            return <Navigate to={routes.loginPath} />;
        }
        if (!isLoading && isLoggedIn) {
            return <Outlet />;
        }
        return <Loading />;
    }
    return <Navigate to={routes.loginPath} />;
};

export default ProtectedRoute;
