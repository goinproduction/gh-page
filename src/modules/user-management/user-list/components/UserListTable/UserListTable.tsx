import { Modal, Table } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../../state-management/reducers';
import CheckoutModal from '../../../modals/components/CheckoutModal/CheckoutModal';
import DeleteUserModal from '../../../modals/components/DeleteUserModal/DeleteUserModal';
import * as manageUserActions from '../../../modals/state/actions';
import { IUserItem } from '../../interface/user-list';
import { userListColumns } from './UserListColumn';

const UserListTable = () => {
    const dispatch = useDispatch();
    const { userList, isLoading } = useSelector((state: State) => state.userList);

    const warningDeleteUser = () => {
        Modal.warning({
            title: 'Warning',
            content: (
                <h4 className='color-dark'>
                    Can not delete users which are having debt upper than zero
                </h4>),
            centered: true,
        });
    };

    const openCheckoutModal = useCallback((userItem: IUserItem) => {
        dispatch(manageUserActions.openCheckoutModal(userItem));
    }, [dispatch]);

    const openDeleteUserModal = useCallback((userItem: IUserItem) => {
        if (+userItem.debt <= 0) {
            dispatch(manageUserActions.openDeleteUserModal(userItem));
        } else {
            warningDeleteUser();
        }
    }, [dispatch]);

    return (
        <div className='admin-user-list'>
            <CheckoutModal />
            <DeleteUserModal />
            <Table
                dataSource={userList}
                pagination={false}
                loading={isLoading}
                columns={userListColumns({ onOpenCheckoutModal: openCheckoutModal, onOpenDeleteUserModal: openDeleteUserModal })}
            />
        </div>
    );
};

export default UserListTable;
