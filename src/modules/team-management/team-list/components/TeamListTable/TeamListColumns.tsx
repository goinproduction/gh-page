/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Button from '../../../../../components/Button/Button';
import Image from '../../../../../components/Image/Image';
import { ITeamItem } from '../../interfaces/team-list';

type Props = {
    onDelete: (team: ITeamItem) => void,
    onEdit: (team: ITeamItem) => void
}
export const teamListColumns = ({ onDelete, onEdit }: Props) => [
    {
        title: () => (
            <p className='text-center'>Logo</p>
        ),
        key: 'team-logo',
        render: (teamItem: ITeamItem) => (
            <div className="d-flex align-items-center justify-content-center">
                <Image className='team-item__avatar' src={teamItem.logo} />
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-start'>Name</p>
        ),
        key: 'team-name',
        render: (teamItem: ITeamItem) => (
            <div className="text-start">
                <span> {teamItem.name} </span>
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-start'>Action</p>
        ),
        width: 120,
        key: 'action',
        render: (team: ITeamItem) => (
            <div className="d-flex">
                <Button className='btn-edit' onClick={() => onEdit(team)} type='dark' htmlType='button'><i className='fal fa-pen' /></Button>
                <Button onClick={() => onDelete(team)} className='ml-1 btn-delete' type='dark' htmlType='button'><i className='fal fa-trash-alt' /></Button>
            </div>
        ),
    },
];
