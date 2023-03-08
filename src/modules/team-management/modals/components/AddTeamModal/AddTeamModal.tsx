/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { Divider, Form, Input, Modal, Radio, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import UpLoad from '../../../../../components/Upload/Upload';
import { State } from '../../../../../state-management/reducers';
import { IFileUpload } from '../../../../../utils/interfaces';
import * as formValidator from '../../../../../utils/validate';
import { getLeagueListRequest } from '../../../../league-list/state/action';
import { IAddTeamField } from '../../interface/manage-team';
import { addTeamRequest, closeModalAddTeam } from '../../state/actions';

const AddTeamModal = () => {
    const [form] = Form.useForm();
    const [file, setFile] = useState<File>();
    const [logoUrl, setLogoUrl] = useState<string | ArrayBuffer>('');
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageTeam.add);
    const { leagueList } = useSelector((state : State) => state.leagueList);
    const onFinish = (data: IAddTeamField) => {
        const { name, isNational, leagueId } = data;
        dispatch(addTeamRequest({ logo: file as File, name, isNational, leagueId }));
    };
    const onCloseModal = () => {
        dispatch(closeModalAddTeam());
    };
    const resetField = () => {
        setLogoUrl('');
        form.resetFields();
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
    useEffect(() => {
        dispatch(getLeagueListRequest());
    }, []);
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
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 18 }}
                onFinish={onFinish}
                className='add-match-form'
                form={form}
            >
                <h1 className='add-match-form__title'>Add New Team</h1>
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
                    hasFeedback
                    label={<h6 className='add-match-form__label'>League</h6>}
                    name="leagueId"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please input select league!' },
                    ]}
                >
                    <Select optionFilterProp="children" showSearch size='large' placeholder='Select league'>
                        {leagueList.map((league) => (
                            <Select.Option value={league.id}> {league.name} </Select.Option>
                        ))}
                    </Select>
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
                    name='isNational'
                    label={<h6 className='add-match-form__label'>Type Of Team</h6>}
                    rules={[
                        { required: true, message: 'Please select type of team!' },
                    ]}
                >
                    <Radio.Group>
                        <Radio value='false'><p className="color-dark">Football Club</p></Radio>
                        <Radio value='true'><p className="color-dark">National Team</p></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ sm: { offset: 5, span: 18 }, offset: 0 }}>
                    <Button isLoading={isLoading} htmlType='submit' type='primary' className='add-match-form__button'>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddTeamModal;
