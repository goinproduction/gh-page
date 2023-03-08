/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Divider, Form, Input, Modal, Select, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import { ICheckoutAmount, ICheckoutData } from '../../interfaces/manage-user';
import * as manageUserActions from '../../state/actions';
import coinImage from '../../../../../assets/images/coin.png';

const { Option, OptGroup } = Select;

const CheckoutModal = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageUser.checkout);
    const { currentUserOnModal } = useSelector((state: State) => state.manageUser);

    const closeModal = () => {
        form.resetFields();
        dispatch(manageUserActions.closeCheckoutModal());
    };

    const onFinish = (data: ICheckoutAmount) => {
        const { amount } = data;
        if (currentUserOnModal) {
            const checkoutData: ICheckoutData = { userId: currentUserOnModal?.id, amount };
            dispatch(manageUserActions.checkoutRequest(checkoutData));
        }
    };

    const [itemsAmount, setItemsAmount] = useState(['10', '20', '50', '100', '200', '500']);

    useEffect(() => {
        form.resetFields();
        setItemsAmount(['10', '20', '50', '100', '200', '500']);
    }, [currentUserOnModal, form]);

    const [newAmount, setNewAmount] = useState('');

    const onNameChange = (event: any) => {
        setNewAmount(event.target.value);
    };

    const addItem = (e: any) => {
        if (itemsAmount.includes(newAmount)) {
            return;
        }
        if (newAmount !== '') {
            e.preventDefault();
            setItemsAmount([...itemsAmount, newAmount]);
            setNewAmount('');
        }
    };

    const coin = <img className='checkout-option__coin' src={coinImage} alt="" />;

    return (
        <Modal
            centered
            title={<h6 className='color-dark'>Checkout</h6>}
            visible={isVisible}
            className='modal-delete'
            footer={null}
        >
            <Form
                name="basic"
                form={form}
                initialValues={{ remember: true }}
                autoComplete="off"
                layout='horizontal'
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 18 }}
                onFinish={onFinish}
            >
                <Form.Item
                    hasFeedback
                    label={<h6 className='add-match-form__label'>Amount</h6>}
                    name="amount"
                    className='form-item-required'
                    rules={[
                        { required: true, message: 'Please select an amount!' },
                        () => ({
                            validator(_, value) {
                                if (+value <= 0) {
                                    return Promise.reject(new Error('The amount can not be zero or lower!'));
                                }
                                if ((currentUserOnModal !== null && value <= currentUserOnModal.debt) || !value) {
                                    return Promise.resolve();
                                }
                                if ((currentUserOnModal !== null && value > currentUserOnModal.debt)) {
                                    return Promise.reject(new Error('The amount need to be equal or lower than current debt!'));
                                }
                                return Promise.reject(new Error('The amount must be a number!'));
                            },
                        }),
                    ]}
                >
                    {currentUserOnModal !== null && (
                        <Select
                            className='w-100i'
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space align="center" style={{ padding: '0 8px 4px' }}>
                                        <Input placeholder="Please enter item" value={newAmount} onChange={onNameChange} />
                                        <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
                                            <PlusOutlined /> Add item
                                        </Typography.Link>
                                    </Space>
                                </>
                            )}
                        >
                            <Option value={currentUserOnModal.debt.toString()}>{currentUserOnModal?.debt} {coin} (All)</Option>
                            <OptGroup label="Or Checkout With Amount">
                                {itemsAmount.map((item) => (
                                    <Option key={item}>{item} {coin}</Option>
                                ))}
                            </OptGroup>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ sm: { offset: 5, span: 18 }, offset: 0 }}>
                    <div className='d-flex justify-content-end'>
                        <Button isDisable={isLoading} onClick={closeModal} className='btn-close-modal' htmlType='button'>Cancel</Button>
                        <Button isLoading={isLoading} htmlType='submit' className='ml-1'>Checkout</Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CheckoutModal;
