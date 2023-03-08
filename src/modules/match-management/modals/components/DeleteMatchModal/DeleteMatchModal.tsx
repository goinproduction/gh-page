import { Col, Divider, Modal, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import { closeModalDeleteMatch, deleteMatchRequest } from '../../state/actions';

const DeleteMatchModal = () => {
    const { isVisible, isLoading } = useSelector((state: State) => state.manageMatch.delete);
    const { currentMatchOnModal } = useSelector((state: State) => state.manageMatch);

    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteMatchRequest(currentMatchOnModal.id));
    };
    const onCancel = () => {
        dispatch(closeModalDeleteMatch());
    };
    return (
        <Modal
            visible={isVisible}
            onCancel={onCancel}
            footer={null}
            width={800}
            className='modal-delete'
        >
            <h2 className='color-dark'>
                Are you sure you want to delete this match?
            </h2>
            <Row>
                <Col span={11}>
                    <div className='d-flex align-items-center justify-content-end p-2'>
                        <p className='mr-1'> {currentMatchOnModal.homeTeam.name} </p>
                        <img className='icon-sm' src={currentMatchOnModal.homeTeam.logo} alt='' />
                    </div>
                </Col>
                <Col span={2}>
                    <div className='flex-mid h-100'>
                        <p>VS</p>
                    </div>
                </Col>
                <Col span={11}>
                    <div className='d-flex align-items-center p-2'>
                        <img className='icon-sm mr-1' src={currentMatchOnModal.awayTeam.logo} alt='' />
                        <p> {currentMatchOnModal.awayTeam.name} </p>
                    </div>
                </Col>
            </Row>
            <Divider />
            <div className='d-flex justify-content-end'>
                <Button onClick={onCancel} isDisable={isLoading} className='btn-close-modal' htmlType='button'>Cancel</Button>
                <Button onClick={onDelete} isLoading={isLoading} className='ml-1' htmlType='button'>Confirm</Button>
            </div>
        </Modal>
    );
};

export default DeleteMatchModal;
