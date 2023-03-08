import { Divider, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import { State } from '../../../../../state-management/reducers';
import { ILeagueItem } from '../../../../league-list/interfaces/league-list';
import { closeModalDeleteLeague, deleteLeagueRequest } from '../../state/actions';

type Props = {
    league: ILeagueItem
}
const DeleteLeagueModal = ({ league }: Props) => {
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageLeague.delete);
    const onDelete = () => {
        dispatch(deleteLeagueRequest(league.id));
    };
    const onCloseModal = () => {
        dispatch(closeModalDeleteLeague());
    };

    return (
        <Modal
            visible={isVisible}
            onCancel={onCloseModal}
            footer={null}
            className='modal-delete'
            title={<h6 className='color-dark'><i className='left-icon fal fa-info-circle color-primary' />Please confirm</h6>}
        >
            <h2 className='color-dark'>
                Are you sure you want to delete <Image src={league.logo} className='league-icon circle' /> <b>{league.name}</b>
            </h2>
            <Divider />
            <div className='d-flex justify-content-end'>
                <Button onClick={onCloseModal} className='btn-close-modal' htmlType='button'>Cancel</Button>
                <Button onClick={onDelete} isLoading={isLoading} className='ml-1' htmlType='button'>Confirm</Button>
            </div>
        </Modal>
    );
};

export default DeleteLeagueModal;
