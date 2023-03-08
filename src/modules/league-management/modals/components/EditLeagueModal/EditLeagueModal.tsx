/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { Divider, Form, Input, Modal } from 'antd';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import UpLoad from '../../../../../components/Upload/Upload';
import { State } from '../../../../../state-management/reducers';
import { IFileUpload } from '../../../../../utils/interfaces';
import * as formValidator from '../../../../../utils/validate';
import { ILeagueItem } from '../../../../league-list/interfaces/league-list';
import { IAddLeagueField } from '../../interface/manage-league';
import { addLeagueRequest, closeModalEditLeague, editLeagueRequest } from '../../state/actions';

type Props = {
    league: ILeagueItem;
}
const EditLeagueModal = ({ league }: Props) => {
    const [form] = Form.useForm();
    const [file, setFile] = useState<File>();
    const [logoUrl, setLogoUrl] = useState<string | ArrayBuffer>('');
    const [backgroundFile, setBackgroundFile] = useState<File>();
    const [backgroundUrl, setBackgroundUrl] = useState<string | ArrayBuffer>('');
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageLeague.edit);
    const onFinish = (data: IAddLeagueField) => {
        const { name } = data;
        dispatch(editLeagueRequest({ name, background: backgroundFile as File, logo: file as File }, league.id));
    };
    const onCloseModal = () => {
        dispatch(closeModalEditLeague());
    };
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
    useEffect(() => {
        const { name, countryName, background } = league;
        form.setFieldsValue({ name, countryName, background });
    }, [league]);
    const afterClose = () => {
        setLogoUrl('');
        setBackgroundUrl('');
    };
    return (
        <Modal
            visible={isVisible}
            onCancel={onCloseModal}
            footer={false}
            width={800}
            afterClose={afterClose}
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
                <h1 className='add-match-form__title'><Image src={league.logo} className='league-icon left-icon circle' />Edit League</h1>
                <Divider />
                <Form.Item
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
                    name='background'
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Background</h6>}
                    rules={[
                        { required: false, message: 'Please choose team logo!' },
                        () => ({
                            validator(_, uploadedFile: IFileUpload) {
                                if (typeof uploadedFile === 'object') {
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
                    >
                        {!backgroundUrl
                            ? <Image className='w-100' src={league.background} />
                            : <img className='w-100' src={backgroundUrl as string} alt='' />}
                    </UpLoad>
                </Form.Item>
                <Form.Item
                    name='logo'
                    label={<h6 className='add-match-form__label'>Logo</h6>}
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
                                }
                                return Promise.resolve();
                            },
                        }),
                    ]}
                >
                    <UpLoad
                        name='logo'
                        imageUrl={logoUrl as string}
                        beforeUpload={beforeUpload}
                    >
                        {!logoUrl
                            ? <Image className='w-100' src={league.logo} />
                            : <img className='w-100' src={logoUrl as string} alt='' />}
                    </UpLoad>
                </Form.Item>
                <Form.Item wrapperCol={{ sm: { offset: 6, span: 18 }, offset: 0 }}>
                    <Button isLoading={isLoading} htmlType='submit' type='primary' className='add-match-form__button'>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditLeagueModal;
