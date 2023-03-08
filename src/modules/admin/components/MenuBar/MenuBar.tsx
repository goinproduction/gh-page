import { MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../../../../assets/images/admin-avatar.png';
import logo from '../../../../assets/images/logo-red.png';
import Button from '../../../../components/Button/Button';
import { renderConfirmModal } from '../../../../utils/config/modal-confirm';
import { adminNavigationLinks } from '../../../../utils/navigation-links';
import { logoutUser } from '../../../authentication/state/action';

const MenuBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
    };
    const onConfirmLogout = () => {
        renderConfirmModal({
            title: 'Are you sure you want to sign out?',
            onOk: handleLogout,
        });
    };
    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <div className='admin-menu__container'>
            <p className='admin-menu__title'>
                <Button
                    type='dark'
                    htmlType='button'
                    className='admin-menu__button_collapsed'
                    onClick={toggleCollapsed}
                >
                    <MenuFoldOutlined />
                </Button>
                {!isCollapsed && (
                    <img src={logo} className='admin-menu__logo' alt="" />
                )}
            </p>
            <div className="admin-menu__header flex-mid flex-column">
                {!isCollapsed ? (
                    <>
                        <img src={avatar} alt="" className='admin-menu__avatar' />
                        <h6>Hello Admin</h6>
                    </>
                ) : (
                    <Avatar src={avatar} />
                )}
            </div>
            <Menu
                defaultSelectedKeys={[pathname]}
                mode="inline"
                theme="dark"
                className='admin-menu'
                inlineCollapsed={isCollapsed}
            >
                {adminNavigationLinks.map((navigationLink) => (
                    <Menu.Item key={navigationLink.path} icon={<navigationLink.icon />}>
                        <Link to={navigationLink.path}> {navigationLink.title} </Link>
                    </Menu.Item>
                ))}
                <Menu.Item
                    key='/'
                    icon={<LogoutOutlined />}
                    onClick={onConfirmLogout}
                >
                    <span className="admin-menu__logout-link">Logout</span>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default MenuBar;
