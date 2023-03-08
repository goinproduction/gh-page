/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { Divider, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import UpLoad from '../../../../../components/Upload/Upload';
import { State } from '../../../../../state-management/reducers';
import { IFileUpload } from '../../../../../utils/interfaces';
import * as formValidator from '../../../../../utils/validate';
import { IAddLeagueField } from '../../interface/manage-league';
import { addLeagueRequest, closeModalAddLeague } from '../../state/actions';

const AddLeagueModal = () => {
    const [form] = Form.useForm();
    const [logoFile, setLogoFile] = useState<File>();
    const [backgroundFile, setBackgroundFile] = useState<File>();
    const [logoUrl, setLogoUrl] = useState<string | ArrayBuffer>('');
    const [backgroundUrl, setBackgroundUrl] = useState<string | ArrayBuffer>('');
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageLeague.add);
    const onFinish = (data: IAddLeagueField) => {
        const { name } = data;
        dispatch(addLeagueRequest({ name, background: backgroundFile as File, logo: logoFile as File }));
    };
    const onCloseModal = () => {
        dispatch(closeModalAddLeague());
    };
    const resetField = () => {
        setLogoUrl('');
        setBackgroundUrl('');
        form.resetFields();
    };
    const beforeUpload = (updatedFile: File) => {
        const reader = new FileReader();
        setLogoFile(updatedFile);
        reader.onload = () => {
            if (reader.readyState === reader.DONE) {
                setLogoUrl(reader.result!);
            }
        };
        reader.readAsDataURL(updatedFile);
    };
    const beforeUploadBackground = (updatedFile: File) => {
        const reader = new FileReader();
        setBackgroundFile(updatedFile);
        reader.onload = () => {
            if (reader.readyState === reader.DONE) {
                setBackgroundUrl(reader.result!);
            }
        };
        reader.readAsDataURL(updatedFile);
    };
    return (
        <Modal
            visible={isVisible}
            onCancel={onCloseModal}
            footer={false}
            width={800}
            afterClose={resetField}
        >
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                layout='horizontal'
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 17 }}
                onFinish={onFinish}
                className='add-match-form'
                form={form}
            >
                <h1 className='add-match-form__title'>Add New League</h1>
                <Divider />
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Name</h6>}
                    name="name"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please input team name!' },
                    ]}
                >
                    <Input size='large' placeholder='Input team name' />
                </Form.Item>
                <Form.Item
                    name='logo'
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Logo</h6>}
                    rules={[
                        { required: true, message: 'Please choose team logo!' },
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
                        imageUrl={logoUrl as string}
                        beforeUpload={beforeUpload}
                    />
                </Form.Item>
                <Form.Item
                    name='background'
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Background</h6>}
                    rules={[
                        { required: false, message: 'Please choose team logo!' },
                        () => ({
                            validator(_, uploadedFile: IFileUpload) {
                                if (uploadedFile) {
                                    if (formValidator.isValidFile(uploadedFile)) {
                                        return Promise.resolve();
                                    }
                                    if (!formValidator.isValidFileSize(uploadedFile)) {
                                        return Promise.reject(new Error('Image must smaller than 2MB!'));
                                    }
                                    return Promise.reject(new Error('You can only upload JPG/PNG/JPEG file!'));
                                } return Promise.resolve();
                            },
                        }),
                    ]}
                >
                    <UpLoad
                        name='background'
                        imageUrl={backgroundUrl as string}
                        beforeUpload={beforeUploadBackground}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ sm: { offset: 6, span: 18 }, offset: 0 }}>
                    <Button isLoading={isLoading} htmlType='submit' type='primary' className='add-match-form__button'>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddLeagueModal;
