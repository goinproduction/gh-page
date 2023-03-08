/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Divider, Form, InputNumber, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import { IEditMatchScoreArgument } from '../../interface/manage-match';
import { editMatchScoreRequest } from '../../state/actions';

const EditMatchScoreForm = () => {
    const { currentMatchOnModal } = useSelector((state: State) => state.manageMatch);
    const { isLoading } = useSelector((state: State) => state.manageMatch.edit);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        const { scoreTeamHome, scoreTeamAway } = currentMatchOnModal;
        form.setFieldsValue({
            scoreTeamHome,
            scoreTeamAway,
        });
    }, [currentMatchOnModal]);
    const onFinish = (data: IEditMatchScoreArgument) => {
        dispatch(editMatchScoreRequest(data, currentMatchOnModal.id));
    };
    return (
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
            <Row>
                <Col span={24}>
                    <Divider>
                        <h4 className='color-dark'>Score</h4>
                    </Divider>
                </Col>
                <Col span={12}>
                    <Form.Item
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 12 }}
                        hasFeedback
                        label={<h6 className='add-match-form__label'>Home Team</h6>}
                        name="scoreTeamHome"
                        className='form-item-required'
                        rules={[
                            { required: true, message: 'Please input score of Home Team!' },
                        ]}
                    >
                        <InputNumber size='large' controls={false} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 12 }}
                        hasFeedback
                        label={<h6 className='add-match-form__label'>Away Team</h6>}
                        name="scoreTeamAway"
                        className='form-item-required'
                        rules={[
                            { required: true, message: 'Please input score of Away Team!' },
                        ]}
                    >
                        <InputNumber size='large' controls={false} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item wrapperCol={{ sm: { offset: 8, span: 18 }, offset: 0 }}>
                <Button isLoading={isLoading} htmlType='submit' type='primary' className='add-match-form__button'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default EditMatchScoreForm;
