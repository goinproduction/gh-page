import { Divider, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button/Button';
import { State } from '../../../../../state-management/reducers';
import * as manageUserActions from '../../state/actions';

const DeleteUserModal = () => {
    const dispatch = useDispatch();
    const { isVisible, isLoading } = useSelector((state: State) => state.manageUser.deleteUser);
    const { currentUserOnModal } = useSelector((state: State) => state.manageUser);

    const closeModal = () => {
        dispatch(manageUserActions.closeDeleteUserModal());
    };

    const deleteUser = () => {
        if (currentUserOnModal) {
            dispatch(manageUserActions.deleteUserRequest(currentUserOnModal.id.toString()));
        }
    };
    return (
        <Modal
            centered
            title={<h6 className='color-dark'><i className='left-icon fal fa-info-circle color-primary' />Please confirm</h6>}
            visible={isVisible}
            className='modal-delete'
            footer={null}
            onCancel={closeModal}
        >
            <h2 className='color-dark'>
                Are you sure to delete {currentUserOnModal?.fullName}?
            </h2>
            <Divider />
            <div className='d-flex justify-content-end'>
                <Button isDisable={isLoading} onClick={closeModal} className='btn-close-modal' htmlType='button'>Cancel</Button>
                <Button isLoading={isLoading} onClick={deleteUser} className='ml-1' htmlType='button'>Confirm</Button>
            </div>
        </Modal>
    );
};

export default DeleteUserModal;
