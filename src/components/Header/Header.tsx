/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-nested-ternary */
import { CloseOutlined, LoadingOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Drawer, Dropdown, Input, Row } from 'antd';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-red.png';
import { logoutUser } from '../../modules/authentication/state/action';
import { State } from '../../state-management/reducers';
import { renderConfirmModal } from '../../utils/config/modal-confirm';
import { routes } from '../../utils/config/routes';
import { navigationLinks } from '../../utils/navigation-links';
import Button from '../Button/Button';
import Image from '../Image/Image';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { userInfo, isLoggedIn, isLoading } = useSelector((state: State) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        setIsVisible(false);
        dispatch(logoutUser());
    };
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };
    const onConfirmLogout = () => {
        renderConfirmModal({
            title: 'Are you sure you want to sign out?',
            onOk: handleLogout,
        });
    };
    const onCloseNavbar = () => {
        setIsVisible(false);
    };
    const location = useLocation();
    const navigate = useNavigate();

    const [matchSearchInput, setMatchSearchInput] = useState('');

    const queryParams = new URLSearchParams(location.search);

    // const matchSearch = queryParams.get('keyword');

    const onSearchMatch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setMatchSearchInput(value);
    };

    const reloadWithSearchParam = useCallback(() => {
        if (location.pathname === routes.matchPath) {
            const hasMatchSearchParam: boolean = queryParams.has('keyword');
            if (!hasMatchSearchParam) {
                queryParams.append('keyword', matchSearchInput);
            } else {
                queryParams.set('keyword', matchSearchInput);
            }
            queryParams.set('page', '1');

            if (matchSearchInput === '') {
                queryParams.delete('keyword');
            }
            const searchString: string = queryParams.toString();
            navigate(`${routes.matchPath}?${searchString}`);
        }
    }, [matchSearchInput]);

    useEffect(() => {
        const identifier = setTimeout(() => {
            reloadWithSearchParam();
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [reloadWithSearchParam]);
    const getName = (userName: string) => {
        return userName.split(' ').reverse()[0];
    };
    const goToHomePage = () => {
        navigate('/');
    };
    return (
        <div className="header">
            <div className="navbar">
                <Row>
                    <Col md={24} lg={7} sm={24} xs={24}>
                        <div className='d-flex align-items-center justify-content-between h-100'>
                            <Button type='dark' onClick={toggleMenu} htmlType='button' className='navbar__button--menu'><MenuOutlined className='color-light' /> </Button>
                            <img onClick={goToHomePage} className='navbar__logo' src={logo} alt='' />
                            {!isLoggedIn
                                ? <Link to={routes.loginPath} className='navbar__button--menu'><UserOutlined className='color-light' /> </Link>
                                : (
                                    <Dropdown
                                        overlay={(
                                            <div className='navbar__dropdown_user'>
                                                <Link to={routes.userUpdateInformationPath} className='navbar__link'><i className='fal fa-cog left-icon' />My Profile</Link>
                                                <p onClick={onConfirmLogout} className='navbar__link'><i className='fal fa-sign-out left-icon' />Sign out</p>
                                            </div>
                                        )}
                                        placement='bottomLeft'
                                    >
                                        <div>
                                            <Image src={userInfo.avatar} className='navbar__avatar_reponsive' />
                                        </div>
                                    </Dropdown>
                                )}
                        </div>
                    </Col>
                    <Col lg={8} md={24} sm={24} xs={24}>
                        {location.pathname === routes.matchPath
                            && (
                                <div className='h-100 d-flex align-items-center'>
                                    <Input.Search allowClear size='large' placeholder='Search match by team' className='navbar__search' onChange={onSearchMatch} />
                                </div>
                            )}
                    </Col>
                    <Col md={9}>
                        <div className='navbar__link__container'>
                            {navigationLinks.map((navigationLink) => {
                                if (location.pathname === navigationLink.path) {
                                    return <p key={navigationLink.title} className={`navbar__link ${location.pathname === navigationLink.path && 'navbar__link_active'}`}>{navigationLink.title}</p>;
                                }
                                return (
                                    <button className='border-none background-none'>
                                        <Link key={navigationLink.title} to={navigationLink.path} className={`navbar__link ${location.pathname === navigationLink.path && 'navbar__link_active'}`}> {navigationLink.title} </Link>
                                    </button>
                                );
                            })}
                            {isLoading
                                ? <LoadingOutlined className='loading__icon' />
                                : isLoggedIn
                                    ? (
                                        <Dropdown
                                            overlay={(
                                                <div className='navbar__dropdown_user'>
                                                    <Link to={routes.userUpdateInformationPath} className='navbar__link'><i className='fal fa-cog left-icon' />My Profile</Link>
                                                    <p onClick={onConfirmLogout} className='navbar__link'><i className='fal fa-sign-out left-icon' />Sign out</p>
                                                </div>
                                            )}
                                            placement='bottomRight'
                                        >
                                            <div className='d-flex align-items-center navbar__user-info'>
                                                <p className='navbar__user-name'><b>Hi</b> {getName(userInfo.fullName)} </p>
                                                <Image src={userInfo.avatar} className='navbar__avatar' />
                                            </div>
                                        </Dropdown>
                                    )
                                    : <Link to={routes.loginPath} className='navbar__link--login'>Login</Link>}
                        </div>
                    </Col>
                    <Drawer
                        className='drawer-dark'
                        visible={isVisible}
                        onClose={onCloseNavbar}
                        title={<img src={logo} alt='' className='navbar__logo' />}
                        placement='left'
                        closeIcon={null}
                        extra={<Button type='dark' htmlType='button' onClick={onCloseNavbar} className='navbar__drawer__button--close'><CloseOutlined className='color-light' /> </Button>}
                    >
                        <div className="navbar__link__container__drawer">
                            {navigationLinks.map((navigationLink) => (
                                <Link
                                    onClick={onCloseNavbar}
                                    key={navigationLink.title}
                                    to={navigationLink.path}
                                    className='navbar__link'
                                >
                                    {navigationLink.title}
                                </Link>
                            ))}
                            {isLoggedIn
                                ? <p onClick={handleLogout} className='navbar__link--logout'>Sign out</p>
                                : <Link onClick={onCloseNavbar} to={routes.loginPath} className='navbar__link--login'>Login</Link>}
                        </div>
                    </Drawer>
                </Row>
            </div>
        </div>
    );
};

export default Header;
