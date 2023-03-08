/* eslint-disable react-hooks/rules-of-hooks */
import { Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-white.png';
import Button from '../../../components/Button/Button';
import useTitle from '../../../hooks/useTitle';
import { State } from '../../../state-management/reducers';
import { routes } from '../../../utils/config/routes';
import { defaultTitle, pageTitle } from '../../../utils/constants/title-page';
import * as formValidator from '../../../utils/validate';
import { IRegisterField } from '../interfaces/authentication';
import { registerUserRequest } from '../state/action';

const RegisterForm = () => {
    const isLoading = useSelector((state : State) => state.auth.isLoading);
    const dispatch = useDispatch();
    const onFinish = (data: IRegisterField) => {
        dispatch(registerUserRequest(data));
    };
    const [form] = Form.useForm();
    useTitle(`${pageTitle.registerPage} - ${defaultTitle}`);
    return (
        <>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                className='register-form-main form'
                layout='vertical'
                onFinish={onFinish}
                form={form}
            >
                <h1 className='register-form-main__title'>Register new Account</h1>
                <Form.Item
                    name="username"
                    className='form-item-required'
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        () => ({
                            validator(_, value) {
                                if (formValidator.isValidUsername(value as string)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Username cannot start with number, at least 3 characters and maximum 16 characters'));
                            },
                        }),
                    ]}
                >
                    <Input size='large' placeholder='Input your username' />
                </Form.Item>
                <Form.Item
                    name="password"
                    className='form-item-required'
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        () => ({
                            validator(_, value) {
                                if (formValidator.isValidPassword(value as string)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Password must contain 1 uppercase character, 1 lowercase character, 1 number, 1 special character and at least 6 characters'));
                            },
                        }),
                    ]}
                >
                    <Input.Password size='large' placeholder='Input your password' />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    className='form-item-required'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm your password' size='large' />
                </Form.Item>
                <Form.Item
                    name="email"
                    className='form-item-required'
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        () => ({
                            validator(_, value) {
                                if (formValidator.isValidEmail(value as string)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Invalid email'));
                            },
                        }),
                    ]}
                >
                    <Input type='email' size='large' placeholder='Input your email' />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    className='form-item-required'
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your phone number!' },
                        () => ({
                            validator(_, value) {
                                if (formValidator.isValidPhoneNumber(value as string)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Invalid phone number'));
                            },
                        }),
                    ]}
                >
                    <Input size='large' placeholder='Input your phone number' />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name="fullName"
                    className='form-item-required'
                    rules={[{ required: true, message: 'Please input your fullname!' }]}
                >
                    <Input size='large' placeholder='Input your full name' />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('You should accept agreement'))),
                      },
                    ]}
                >
                    <Checkbox>
                        <span className="color-dark">I agree with the term and condition </span>
                        <span className="color-primary">*</span>
                    </Checkbox>
                </Form.Item>
                <Button isLoading={isLoading} htmlType='submit' type='dark' className='register-form__button'>Sign up</Button>
            </Form>
            <div className='register-form-sub'>
                <div className='flex-mid flex-column h-100'>
                    <img className='register-form-sub__image' src={logo} alt="" />
                    <Link to={routes.loginPath} className='register-form-sub__link'>
                        Sign in now
                    </Link>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;
