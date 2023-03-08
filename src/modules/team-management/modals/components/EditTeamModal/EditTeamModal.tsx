/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { Divider, Form, Input, Modal, Radio, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import UpLoad from '../../../../../components/Upload/Upload';
import { State } from '../../../../../state-management/reducers';
import { IFileUpload } from '../../../../../utils/interfaces';
import * as formValidator from '../../../../../utils/validate';
import { getLeagueListRequest } from '../../../../league-list/state/action';
import { ITeamItem } from '../../../team-list/interfaces/team-list';
import { IEditTeamField } from '../../interface/manage-team';
import { closeModalEditTeam, editTeamRequest } from '../../state/actions';

type Props = {
    team: ITeamItem
}
const EditTeamModal = ({ team }: Props) => {
    const [form] = Form.useForm();
    const [file, setFile] = useState<File>();
    const dispatch = useDispatch();
    const [logoUrl, setLogoUrl] = useState<string | ArrayBuffer>(team.logo);
    const { isLoading, isVisible } = useSelector((state: State) => state.manageTeam.edit);
    const { leagueList } = useSelector((state : State) => state.leagueList);
    const onFinish = (data: IEditTeamField) => {
        const { name, isNational, leagueIds } = data;
        dispatch(editTeamRequest({
            logo: file as File,
            name,
            isNational: isNational.toString(),
            id: team.id.toString(),
        }, leagueIds));
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
    const onCloseModal = () => {
        dispatch(closeModalEditTeam());
    };
    useEffect(() => {
        const { name, isNational, leagues } = team;
        setLogoUrl('');
        form.resetFields();
        if (leagues?.length) {
            const leagueIdList = leagues.map((league) => league.id.toString());
            form.setFieldsValue({ name, isNational, leagueIds: leagueIdList });
        } else {
            form.setFieldsValue({ name, isNational });
        }
    }, [form, team]);
    useEffect(() => {
        dispatch(getLeagueListRequest());
    }, []);
    return (
        <Modal
            visible={isVisible}
            onCancel={onCloseModal}
            footer={false}
            width={800}
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
                <h1 className='add-match-form__title'>
                    <Image src={team.logo} className='icon-xs left-icon' />
                    Edit Team {team.name}
                </h1>
                <Divider />
                <Form.Item
                    name='logo'
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Logo</h6>}
                    rules={[
                        { required: false, message: 'Please input team name!' },
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
                            ? <Image className='w-100' src={team.logo} />
                            : <img className='w-100' src={logoUrl as string} alt='' />}
                    </UpLoad>
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Name</h6>}
                    name="name"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please input name!' },
                    ]}
                >
                    <Input size='large' placeholder='Input team name' />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>League</h6>}
                    name="leagueIds"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please input select league!' },
                    ]}
                >
                    <Select mode='multiple' optionFilterProp="children" showSearch size='large' placeholder='Select league'>
                        {leagueList.map((league) => (
                            <Select.Option value={league.id.toString()}> {league.name} </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name='isNational'
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Team</h6>}
                    rules={[
                        { required: true, message: 'Please choose type of team' },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={false}><span className="color-dark">Football Club</span></Radio>
                        <Radio value><span className="color-dark">National Team</span></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ sm: { offset: 5, span: 18 }, offset: 0 }}>
                    <Button isLoading={isLoading} htmlType='submit' type='primary' className='add-match-form__button'>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditTeamModal;
