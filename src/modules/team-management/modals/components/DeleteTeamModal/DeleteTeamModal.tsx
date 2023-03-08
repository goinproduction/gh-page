import { Divider, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import { State } from '../../../../../state-management/reducers';
import { ITeamItem } from '../../../team-list/interfaces/team-list';
import { deleteTeamRequest, closeModalDeleteTeam } from '../../state/actions';

type Props = {
    team: ITeamItem
}
const DeleteTeamModal = ({ team }: Props) => {
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageTeam.delete);
    const onDelete = () => {
        dispatch(deleteTeamRequest(team.id.toString()));
    };
    const onCloseModal = () => {
        dispatch(closeModalDeleteTeam());
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
                Are you sure you want to delete <Image src={team.logo} className='icon-xs' /> <b>{team.name}</b>
            </h2>
            <Divider />
            <div className='d-flex justify-content-end'>
                <Button onClick={onCloseModal} className='btn-close-modal' htmlType='button'>Cancel</Button>
                <Button onClick={onDelete} isLoading={isLoading} className='ml-1' htmlType='button'>Confirm</Button>
            </div>
        </Modal>
    );
};

export default DeleteTeamModal;
