import { Divider, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../../assets/images/money.png';
import logo from '../../../assets/images/logo-white.png';
import Button from '../../../components/Button/Button';
import { ILoginField } from '../interfaces/authentication';
import { loginUserRequest } from '../state/action';
import { State } from '../../../state-management/reducers';
import { routes } from '../../../utils/config/routes';
import useTitle from '../../../hooks/useTitle';
import { defaultTitle, pageTitle } from '../../../utils/constants/title-page';

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: State) => state.auth.isLoading);
    const onFinish = (data: ILoginField) => {
        dispatch(loginUserRequest(data));
    };
    useTitle(`${pageTitle.loginPage} - ${defaultTitle}`);
    return (
        <>
            <div className='login-form-sub'>
                <div>
                    <img className='login-form-sub__image_top' src={logo} alt="" />
                    <h4 className="login-form-sub__title">Chance to be Rich</h4>
                    <Link to={routes.registerPath} className='login-form-sub__link'>
                        Sign up
                    </Link>
                </div>
                <img className='login-form-sub__image_bottom' src={image} alt="" />
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                className='login-form-main form'
                layout='vertical'
                onFinish={onFinish}
            >
                <h1 className='login-form-main__title'>Welcome Back!</h1>
                <h3 className='login-form-main__sub-title'>Login to continue</h3>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        size='large'
                        placeholder='Input your username'
                        prefix={<UserOutlined className='left-icon' />}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className='left-icon' />}
                        size='large'
                        placeholder='Input your password'
                    />
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link className='login-form-main__link_recovery' to='/recovery'>Forgot password?</Link>
                </div>
                <Form.Item>
                    <Button isLoading={isLoading} type='secondary' className='login-form-main__button_login' htmlType='submit'>Sign in</Button>
                </Form.Item>
                <Form.Item>
                    <Divider>
                        <h5 className='login-form-main__sub-title_login'>Or login with</h5>
                    </Divider>
                    <div className="d-flex justify-content-between">
                        <button className='login-form-main__button_facebook login-form-main__button'>Facebook</button>
                        <button type='button' className='login-form-main__button_google login-form-main__button'><i className="fab fa-google" />Google</button>
                    </div>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;
