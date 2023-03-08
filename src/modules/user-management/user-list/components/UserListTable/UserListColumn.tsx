import { DeleteOutlined, DollarOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import coinImage from '../../../../../assets/images/coin.png';
import Button from '../../../../../components/Button/Button';
import { IUserItem } from '../../interface/user-list';
import { formatNumberByBrowserLocale } from '../../../../../utils/format-number-by-browser-locale';
import Image from '../../../../../components/Image/Image';

type Props = {
    onOpenCheckoutModal: (userItem: IUserItem) => void;
    onOpenDeleteUserModal: (userItem: IUserItem) => void;
}

export const userListColumns = (props: Props) => [
    {
        title: () => (
            <p className='text-center'>User Information</p>
        ),
        key: 'user-information',
        render: (userItem: IUserItem) => (
            <div className="d-flex align-items-center">
                <Image className='user-item__avatar' src={userItem.avatar} />
                <div className='d-flex flex-column'>
                    <p className="user-item__name">
                        {userItem.fullName}
                    </p>
                    <p className="user-item__email">
                        {userItem.email}
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-center'>Phone Number</p>
        ),
        key: 'winRate',
        render: (userItem: IUserItem) => (
            <div className="text-center">
                <span> {userItem.phoneNumber}</span>
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-end'>Debt</p>
        ),
        key: 'debt',
        render: (userItem: IUserItem) => (
            <div className="d-flex align-items-center justify-content-end user-item__debt">
                <p className='ml-2'>
                    {formatNumberByBrowserLocale(userItem.debt)}
                </p>
                <img className='icon' src={coinImage} alt="" />
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-center'>Action</p>
        ),
        key: 'action',
        render: (userItem: IUserItem) => (
            <div className="d-flex justify-content-center">
                <Button
                    onClick={() => props.onOpenCheckoutModal(userItem)}
                    className={`${userItem.debt <= 0 ? 'button-checkout_disabled' : 'button-checkout'}`}
                    type='dark'
                    htmlType='button'
                    isDisable={userItem.debt <= 0}
                >
                    <Tooltip zIndex={999} title={+userItem.debt <= 0 ? 'User has no debt is not able to check out' : ''}>
                        Check out <DollarOutlined />
                    </Tooltip>
                </Button>
                <Button onClick={() => props.onOpenDeleteUserModal(userItem)} className="button-delete-user" type='dark' htmlType='button'>
                    <Tooltip zIndex={999} title='Delete user'>
                        <DeleteOutlined />
                    </Tooltip>
                </Button>
            </div>
        ),
    },
];
