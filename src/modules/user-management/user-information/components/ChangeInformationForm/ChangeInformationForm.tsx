/* eslint-disable consistent-return */
/* eslint-disable use-isnan */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import { IUserInfo } from '../../../../authentication/interfaces/authentication';
import { IEditUserInfoField } from '../../interfaces/user-information';
import { updateUserInformationRequest } from '../../state/actions';
import useTitle from '../../../../../hooks/useTitle';
import { defaultTitle, pageTitle } from '../../../../../utils/constants/title-page';
import { isValidPhoneNumber } from '../../../../../utils/validate';

const ChangeInformationForm = () => {
    const { userInfo } = useSelector((state : State) => state.auth);
    const { isLoading } = useSelector((state : State) => state.updateUser.info);
    const [isDisable, setIsDisable] = useState(true);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    useTitle(`${pageTitle.updateProfile} - ${defaultTitle}`);
    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, [userInfo]);
    const onUserInfoChange = () => {
        const { fullName, phoneNumber } = form.getFieldsValue() as IUserInfo;
        if (fullName === userInfo.fullName && phoneNumber === userInfo.phoneNumber) {
            setIsDisable(true);
        } else {
            setIsDisable(false);
        }
    };
    const onFinish = (data: IEditUserInfoField) => {
        dispatch(updateUserInformationRequest(data, userInfo.id));
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
                <h1>UPDATE YOUR PROFILE</h1>
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Email: </h6>}
                name="email"
            >
                <Input disabled size='large' />
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Name: </h6>}
                name="fullName"
                rules={[{ required: true, message: 'Please input your new name!' }]}
            >
                <Input size='large' onChange={onUserInfoChange} />
            </Form.Item>
            <Form.Item
                label={<h6 className='text-white'>Phone: </h6>}
                name="phoneNumber"
                rules={[
                    { required: true, message: 'Please input your new name!' },
                    () => ({
                        validator(_, value) {
                            if (isValidPhoneNumber(value as string)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Invalid phone number'));
                        },
                    }),
                ]}
            >
                <Input size='large' onChange={onUserInfoChange} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button isLoading={isLoading} isDisable={isDisable} htmlType='submit' type='primary' className='w-100'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default ChangeInformationForm;
