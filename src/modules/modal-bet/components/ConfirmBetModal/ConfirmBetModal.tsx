import { Divider, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/Button/Button';
import { State } from '../../../../state-management/reducers';
import { IBetParams } from '../../interfaces/modal-bet';
import * as betActions from '../../state/actions';

type Props = {
    matchId: string | undefined;
}

const ConfirmBetModal = (props: Props) => {
    const dispatch = useDispatch();
    const { currentTeamChoose, isModalVisible: isVisible, isLoading } = useSelector((state: State) => state.betTeam);
    const { matchId } = props;

    const closeModal = () => {
        dispatch(betActions.closeModalConfirm());
    };

    const confirmBet = () => {
        if (currentTeamChoose && matchId) {
            const params: IBetParams = {
                teamBet: +currentTeamChoose.id,
                matchId: +matchId,
            };
            dispatch(betActions.betTeamRequest(params));
        }
    };
    return (
        <Modal
            centered
            title={<h6 className='color-dark'><i className='left-icon fal fa-info-circle color-primary' />Please confirm</h6>}
            visible={isVisible}
            className='modal-delete'
            footer={null}
        >
            <h2 className='color-dark'>
                Are you sure to choose <b>{currentTeamChoose?.name}</b>?
            </h2>
            <Divider />
            <div className='d-flex justify-content-end'>
                <Button isDisable={isLoading} onClick={closeModal} className='btn-close-modal' htmlType='button'>Cancel</Button>
                <Button isLoading={isLoading} onClick={confirmBet} className='ml-1' htmlType='button'>Confirm</Button>
            </div>
        </Modal>
    );
};

export default ConfirmBetModal;
