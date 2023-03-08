/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import { updateUserAvatarRequest } from '../../state/actions';
import * as formValidator from '../../../../../utils/validate';
import UpLoad from '../../../../../components/Upload/Upload';
import { IFileUpload } from '../../../../../utils/interfaces';

const ChangeAvatarForm = () => {
    const { userInfo } = useSelector((state: State) => state.auth);
    const { isLoading } = useSelector((state: State) => state.updateUser.avatar);
    const [file, setFile] = useState<File>();
    const [logoUrl, setLogoUrl] = useState<string | ArrayBuffer>('');
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, [userInfo]);

    const beforeUpload = (updatedFile: File) => {
        const reader = new FileReader();
        setFile(updatedFile);
        reader.onload = () => {
            if (reader.readyState === reader.DONE) {
                setLogoUrl(reader.result!);
            }
        };
        reader.readAsDataURL(updatedFile);
    };
    const onFinish = () => {
        dispatch(updateUserAvatarRequest(file as File, userInfo.id));
    };
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{ width: '100%' }}
            form={form}
            layout='vertical'
            className='user-information-form update-avatar-form'
            onFinish={onFinish}
        >
            <Form.Item>
                <h1 className='text-center'>UPDATE YOUR AVATAR</h1>
            </Form.Item>
            <Form.Item
                name='logo'
                hasFeedback
                label=' '
                rules={[
                    { required: true, message: 'Please choose avatar!' },
                    () => ({
                        validator(_, uploadedFile: IFileUpload) {
                            if (formValidator.isValidFile(uploadedFile)) {
                                return Promise.resolve();
                            }
                            if (!formValidator.isValidFileSize(uploadedFile)) {
                                return Promise.reject(new Error('Image must smaller than 2MB!'));
                            }
                            return Promise.reject(new Error('You can only upload JPG/PNG/JPEG file!'));
                        },
                    }),
                ]}
            >
                <UpLoad
                    name='logo'
                    className={!file ? 'upload-avatar' : 'upload-avatar-none'}
                    imageUrl={logoUrl as string}
                    beforeUpload={beforeUpload}
                >
                    {!logoUrl
                        ? (
                        <div className="d-flex flex-column">
                            <UploadOutlined className='upload-icon' />
                            <span className='color-grey'>Change avatar</span>
                        </div>
                        )
                        : <img className='w-100' alt='' src={logoUrl as string} />}
                </UpLoad>
            </Form.Item>
            <Form.Item>
                <div className="flex-mid">
                    <Button isLoading={isLoading} htmlType='submit' type='primary' className='btn-submit-avatar'>Submit</Button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default ChangeAvatarForm;
