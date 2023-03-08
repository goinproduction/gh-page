import { Col, Modal, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../../../../../components/Image/Image';
import { State } from '../../../../../state-management/reducers';
import { matchStatus } from '../../../../../utils/constants/match-status';
import { closeModalEditMatch } from '../../state/actions';
import EditMatchInfoForm from './EditMatchInfoForm';
import EditMatchScoreForm from './EditMatchScoreForm';

const EditMatchModal = () => {
    const { isVisible } = useSelector((state: State) => state.manageMatch.edit);
    const { currentMatchOnModal } = useSelector((state : State) => state.manageMatch);
    const dispatch = useDispatch();
    const onCancel = () => {
        dispatch(closeModalEditMatch());
    };
    return (
        <Modal
            visible={isVisible}
            onCancel={onCancel}
            footer={null}
            width={800}
            className='modal-edit'
            title={<h1 className='add-match-form__title'>Edit Match</h1>}
        >
            <Row>
                <Col span={11}>
                    <div className='match-info'>
                        <Image className='icon-sm' src={currentMatchOnModal.homeTeam.logo} />
                        <p className='mr-1'> {currentMatchOnModal.homeTeam.name} </p>
                    </div>
                </Col>
                <Col span={2}>
                    <div className='flex-mid h-100'>
                        <p className='match-info__score'>{currentMatchOnModal.scoreTeamHome}</p>
                        <p className='match-info__score'>:</p>
                        <p className='match-info__score'>{currentMatchOnModal.scoreTeamAway}</p>
                    </div>
                </Col>
                <Col span={11}>
                    <div className='match-info'>
                        <Image className='icon-sm' src={currentMatchOnModal.awayTeam.logo} />
                        <p className='mr-1'> {currentMatchOnModal.awayTeam.name} </p>
                    </div>
                </Col>
            </Row>
            {currentMatchOnModal.status === matchStatus.upComing && <EditMatchInfoForm />}
            {currentMatchOnModal.status === matchStatus.live && <EditMatchScoreForm />}
        </Modal>
    );
};

export default EditMatchModal;
