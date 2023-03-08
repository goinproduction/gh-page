import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import useTitle from '../../hooks/useTitle';
import MenuUserInformation from '../../modules/user-management/user-information/components/MenuUserInformation/MenuUserInformation';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';

const UserInformationLayout = () => {
    useScrollToTop();
    useTitle(`${pageTitle.userInformationPage} - ${defaultTitle}`);
    return (
        <div className='main user-information-layout__container'>
            <Row gutter={[16, 16]}>
                <Col xxl={4} xl={6} lg={6} md={24} sm={24} xs={24}>
                    <MenuUserInformation />
                </Col>
                <Col xxl={20} xl={18} lg={18} md={24} sm={24} xs={24}>
                    <div className="user-information-layout__outlet-container">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserInformationLayout;
