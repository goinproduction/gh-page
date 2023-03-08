import { Row } from 'antd';
import { Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import MenuBar from '../../modules/admin/components/MenuBar/MenuBar';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';

const AdminPage = () => {
    useTitle(`${pageTitle.adminPage} - ${defaultTitle}`);
    return (
        <div>
            <Row>
                <MenuBar />
                    <div className="admin-main">
                        <Outlet />
                    </div>
            </Row>
        </div>
    );
};

export default AdminPage;
