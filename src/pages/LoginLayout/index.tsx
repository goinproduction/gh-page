import { Col, Row } from 'antd';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { routes } from '../../utils/config/routes';
import { getAccessToken } from '../../utils/token-config';

const LoginLayout = () => {
    if (getAccessToken()) {
        return <Navigate to={routes.homePath} />;
    }
    return (
        <div className="flex-mid h-100vh w-100">
            <Row>
                <Col lg={24}>
                    <div className="form__nav">
                        <Link to={routes.homePath}><i className="far fa-angle-left left-icon color-white" />Back to Home</Link>
                    </div>
                    <div className="d-flex form__container">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LoginLayout;
