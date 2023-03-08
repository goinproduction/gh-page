/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { Col, DatePicker, Divider, Form, InputNumber, Modal, Radio, RadioChangeEvent, Row, Select, Spin } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import { State } from '../../../../../state-management/reducers';
import { requiredBetAmount } from '../../../../../utils/constants/bet-amount';
import { defaultDate } from '../../../../../utils/constants/default-model';
import { handicapRatioList } from '../../../../../utils/constants/handicap-ratio';
import { getLeagueListRequest } from '../../../../league-list/state/action';
import { IGetTeamListParams } from '../../../../team-management/team-list/interfaces/team-list';
import { getTeamListRequest } from '../../../../team-management/team-list/state/actions';
import { IAddMatchField } from '../../interface/manage-match';
import { addMatchRequest, closeModalAddMatch } from '../../state/actions';

const { Option } = Select;
const AddMatchModal = () => {
    const { leagueList, isLoading: isLoadingLeague } = useSelector((state: State) => state.leagueList);
    const { isVisible, isLoading } = useSelector((state: State) => state.manageMatch.add);
    const { teamList, isLoading: isLoadingTeam } = useSelector((state: State) => state.teamList);
    const [date, setDate] = useState(defaultDate);
    const [hasHandicap, setHasHandicap] = useState(false);
    const [form] = Form.useForm();
    const [leagueId, setLeagueId] = useState<string | null>(null);
    const dispatch = useDispatch();
    const params: IGetTeamListParams = {
        leagueId,
    };
    useEffect(() => {
        dispatch(getLeagueListRequest());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getTeamListRequest(params));
        form.resetFields();
        form.setFieldsValue({ leagueId });
    }, [leagueId, dispatch, form]);

    const onFinish = (data: IAddMatchField) => {
        dispatch(addMatchRequest(data));
    };
    const onCancel = () => {
        dispatch(closeModalAddMatch());
    };
    const resetForm = () => {
        form.resetFields();
        setHasHandicap(false);
        setDate(defaultDate);
    };
    const onHandicapChange = (e: RadioChangeEvent) => {
        setHasHandicap(e.target.value);
    };
    const onAwayTeamHandicapChange = () => {
        form.setFieldsValue({
            homeTeamHandicap: 0,
        });
    };
    const onHomeTeamHandicapChange = () => {
        form.setFieldsValue({
            awayTeamHandicap: 0,
        });
    };
    const range = (start: number, end: number) => {
        const result = [];
        // eslint-disable-next-line no-plusplus
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };
    const disabledDateTime = () => ({
        disabledHours: () => range(0, date.hour),
    });
    const onSelectDate = (newDate: moment.Moment) => {
        if (newDate.get('date') === new Date().getDate()) {
            setDate({
                hour: newDate.get('hour'),
                minute: newDate.get('minute'),
            });
        } else {
            setDate({
                hour: 0,
                minute: 0,
            });
        }
    };
    return (
        <Modal
            visible={isVisible}
            onCancel={onCancel}
            footer={null}
            width={800}
            afterClose={resetForm}
        >
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                layout='horizontal'
                onFinish={onFinish}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 18 }}
                className='add-match-form'
                form={form}
            >
                <h1 className='add-match-form__title'>Add New Match</h1>
                <Divider />
                <Form.Item
                    hasFeedback={!!leagueId}
                    label={<h6 className='add-match-form__label'>League</h6>}
                    name="leagueId"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please select League!' },
                    ]}
                >
                    <Select
                        size='large'
                        style={{ width: '100%' }}
                        placeholder="Please select league"
                        onChange={(value) => setLeagueId(value)}
                        notFoundContent={
                            isLoadingLeague
                                ? <p><Spin className='left-icon' /> Loading</p>
                                : (
                                    <p>No Data</p>
                                )
                        }
                    >
                        {leagueList.map((league) => (
                            <Option key={league.id} value={league.id}>
                                <div className="d-flex align-items-center add-match-form__option">
                                    <p className='option__title'> {league.name} </p>
                                </div>
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Teams</h6>}
                    name='teams'
                    rules={[
                        { required: true, message: 'Please select team!' },
                        () => ({
                            validator(_, value: [number, number]) {
                                if (!value) {
                                    return Promise.reject(new Error('Please select exactly 2 teams'));
                                }
                                if (value.length === 2) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Please select exactly 2 teams'));
                            },
                        }),
                    ]}
                >
                    <Select
                        mode="multiple"
                        size='large'
                        placeholder="Please select 2 teams"
                        maxTagCount={2}
                        disabled={!leagueId}
                    >
                        {isLoadingTeam
                            ? <p><Spin className='left-icon' /> Loading</p>
                            : teamList.map((team) => (
                                <Option key={team.id} value={`${team.id.toString()}-${team.name}`}>
                                    <div className="d-flex align-items-center add-match-form__option">
                                        <Image src={team.logo} className='left-icon option__avatar' />
                                        <p className='option__title'> {team.name} </p>
                                    </div>
                                </Option>
                            ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Bet Amount</h6>}
                    name="betAmount"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please input bet amount!' },
                        () => ({
                            validator(_, value) {
                                const { MIN: minAmount, MAX: maxAmount } = requiredBetAmount;
                                if (!Number.isInteger(value)) {
                                    return Promise.reject(new Error('Bet amount should be integer'));
                                }
                                if (value >= minAmount && value <= maxAmount) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(`Bet amount must be between ${minAmount} and ${maxAmount}`));
                            },
                        }),
                    ]}
                >
                    <InputNumber controls={false} size='large' placeholder='Input bet amount' />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Start Time</h6>}
                    name="startTime"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please choose start time!' },
                    ]}
                >
                    <DatePicker
                        format="HH:mm MM/DD/YYYY"
                        showTime
                        size='large'
                        placement='topLeft'
                        disabledDate={(current) => current && current < moment().startOf('day')}
                        disabledTime={disabledDateTime}
                        onSelect={onSelectDate}
                    />
                </Form.Item>
                <Form.Item
                    name='hasHandicap'
                    label={<h6 className='add-match-form__label'>Handicap</h6>}
                    className='form-item-required'
                >
                    <Radio.Group defaultValue={false} onChange={onHandicapChange}>
                        <Radio value={false}><span className="color-dark">No Handicap</span></Radio>
                        <Radio value><span className="color-dark">Has Handicap</span></Radio>
                    </Radio.Group>
                </Form.Item>
                {hasHandicap
                    && (
                        <Row>
                            <Col span={24}>
                                <Divider>
                                    <h4 className='color-dark'>Handicap</h4>
                                </Divider>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    labelCol={{ span: 10 }}
                                    wrapperCol={{ span: 12 }}
                                    hasFeedback
                                    label={<h6 className='add-match-form__label'>Home Team</h6>}
                                    name="homeTeamHandicap"
                                    className='form-item-required'
                                    rules={[
                                        { required: true, message: 'Please select handicap!' },
                                    ]}
                                >
                                    <Select
                                        size='large'
                                        placeholder='0'
                                        onChange={onHomeTeamHandicapChange}
                                    >
                                        {handicapRatioList.map((handicapRatio) => (
                                            <Option value={handicapRatio}>{handicapRatio}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    labelCol={{ span: 10 }}
                                    wrapperCol={{ span: 12 }}
                                    hasFeedback
                                    label={<h6 className='add-match-form__label'>Away Team</h6>}
                                    name="awayTeamHandicap"
                                    className='form-item-required'
                                    rules={[
                                        { required: true, message: 'Please select handicap!' },
                                    ]}
                                >
                                    <Select
                                        placeholder='0'
                                        size='large'
                                        onChange={onAwayTeamHandicapChange}
                                    >
                                        {handicapRatioList.map((handicapRatio) => (
                                            <Option value={handicapRatio}>{handicapRatio}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    )}
                <Form.Item wrapperCol={{ sm: { offset: 8, span: 18 }, offset: 0 }}>
                    <Button isLoading={isLoading} htmlType='submit' type='primary' className='add-match-form__button'>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddMatchModal;
