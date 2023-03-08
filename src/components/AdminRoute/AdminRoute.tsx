import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { State } from '../../state-management/reducers';
import { routes } from '../../utils/config/routes';
import { roles } from '../../utils/constants/role';
import { getAccessToken } from '../../utils/token-config';
import Loading from '../Loading/Loading';

const AdminRoute = () => {
    const { isLoading, userInfo } = useSelector((state : State) => state.auth);
    if (getAccessToken()) {
        if (!isLoading && userInfo.role !== roles.ADMIN_ROLE) {
            return <Navigate to={routes.homePath} />;
        }
        if (!isLoading && userInfo.role === roles.ADMIN_ROLE) {
            return <Outlet />;
        }
        return <Loading />;
    }
    return <Navigate to={routes.loginPath} />;
};

export default AdminRoute;
