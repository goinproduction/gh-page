/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Button from '../../../../components/Button/Button';
import Image from '../../../../components/Image/Image';
import { ILeagueItem } from '../../interfaces/league-list';

type Props = {
    onDelete: (team: ILeagueItem) => void,
    onEdit: (team: ILeagueItem) => void
}
export const leagueListColumns = ({ onDelete, onEdit }: Props) => [
    {
        title: () => (
            <p className='text-center'>Logo</p>
        ),
        key: 'team-logo',
        render: (league: ILeagueItem) => (
            <div className="d-flex align-items-center justify-content-center">
                <Image className='user-item__avatar' src={league.logo} />
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-start'>Name</p>
        ),
        key: 'team-name',
        render: (league: ILeagueItem) => (
            <div className="text-start">
                <span> {league.name} </span>
            </div>
        ),
    },
    {
        title: () => (
            <p className='text-center'>Action</p>
        ),
        width: 120,
        key: 'action',
        render: (league: ILeagueItem) => (
            <div className="d-flex">
                <Button className='btn-edit' onClick={() => onEdit(league)} type='dark' htmlType='button'><i className='fal fa-pen' /></Button>
                <Button onClick={() => onDelete(league)} className='ml-1 btn-delete' type='dark' htmlType='button'><i className='fal fa-trash-alt' /></Button>
            </div>
        ),
    },
];
