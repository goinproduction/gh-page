/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { State } from '../../../../../state-management/reducers';
import { OptionsMenuUserInformation } from '../../../../../utils/options-menu-user-information';
import { logoutUser } from '../../../../authentication/state/action';
import Image from '../../../../../components/Image/Image';
import { renderConfirmModal } from '../../../../../utils/config/modal-confirm';

const MenuUserInformation = () => {
    const userInfo = useSelector((state: State) => state.auth.userInfo);
    const avatar = userInfo.avatar ? userInfo.avatar : 'https://joeschmoe.io/api/v1/random';
    const location = useLocation();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
    };
    const confirmLogin = () => {
        renderConfirmModal({
            title: 'Are you sure you want to sign out?',
            onOk: handleLogout,
        });
    };

    return (
        <div className="d-flex flex-column user-menu">
            <div className='user-menu__avatar-background'>
                <Image className="user-menu__avatar" src={avatar} />
            </div>
            <p className="user-menu__name"> {userInfo.fullName} </p>
            <Menu mode="vertical" theme="dark" defaultSelectedKeys={[location.pathname]}>
                {OptionsMenuUserInformation.map((item) => (
                    <Menu.Item key={item.path} className="user-menu__item">
                        <Link to={item.path}>
                            <h6 className="user-menu__item-title"><i className={`far fa-${item.icon} left-icon`} /> {item.text} </h6>
                        </Link>
                    </Menu.Item>
                ))}
                <Menu.Item className="user-menu__item">
                    <h6 className="user-menu__item-title" onClick={confirmLogin}><i className="far fa-sign-out left-icon" />Sign out</h6>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default MenuUserInformation;
