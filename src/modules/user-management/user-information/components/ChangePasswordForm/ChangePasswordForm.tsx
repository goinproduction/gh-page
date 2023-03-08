/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import * as formValidator from '../../../../../utils/validate';
import { IUpdateUserPasswordField } from '../../interfaces/user-information';
import { updateUserPasswordRequest } from '../../state/actions';

const ChangePasswordForm = () => {
    const { isLoading } = useSelector((state: State) => state.updateUser.password);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (data: IUpdateUserPasswordField) => {
        dispatch(updateUserPasswordRequest(data));
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{ width: '100%' }}
            form={form}
            className='user-information-form'
            onFinish={onFinish}
        >
            <Form.Item wrapperCol={{ offset: '6' }}>
                <h1>UPDATE YOUR PASSWORD</h1>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Current Password</h6>}
                name="oldPassword"
                className='form-item-required'
                hasFeedback
                rules={[
                    { required: true, message: 'Please input your password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (formValidator.isValidPassword(value as string) && getFieldValue('newPassword') !== value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Password must contain 1 uppercase character, 1 lowercase character, 1 number, 1 special character, at least 6 characters and different from new password'));
                        },
                    }),
                ]}
            >
                <Input.Password size='large' placeholder='Input your password' />
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'> New Password</h6>}
                name="newPassword"
                className='form-item-required'
                hasFeedback
                rules={[
                    { required: true, message: 'Please input your password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (formValidator.isValidPassword(value as string) && getFieldValue('oldPassword') !== value) {
                                return Promise.resolve();
                            }
                            if (value === getFieldValue('oldPassword')) {
                                return Promise.reject(new Error('New password must be different from old password'));
                            }
                            return Promise.reject(new Error('Password must contain 1 uppercase character, 1 lowercase character, 1 number, 1 special character and at least 6 characters'));
                        },
                    }),
                ]}
            >
                <Input.Password size='large' placeholder='Input your password' />
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Confirm Password</h6>}
                name="confirm"
                className='form-item-required'
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Confirm your password' size='large' />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button isLoading={isLoading} htmlType='submit' type='primary' className='w-100'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ChangePasswordForm;
