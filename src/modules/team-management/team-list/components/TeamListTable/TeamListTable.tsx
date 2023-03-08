/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'antd';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../../state-management/reducers';
import { defaultSelectedTeam } from '../../../../../utils/constants/default-model';
import DeleteTeamModal from '../../../modals/components/DeleteTeamModal/DeleteTeamModal';
import EditTeamModal from '../../../modals/components/EditTeamModal/EditTeamModal';
import { openModalDeleteTeam, openModalEditTeam } from '../../../modals/state/actions';
import { ITeamItem } from '../../interfaces/team-list';
import { teamListColumns } from './TeamListColumns';

const MatchList = () => {
    const { teamList, isLoading } = useSelector((state: State) => state.teamList);
    const [selectedTeam, setSelectedTeam] = useState<ITeamItem>(defaultSelectedTeam);
    const dispatch = useDispatch();
    const onDeleteTeam = (team : ITeamItem) => {
        setSelectedTeam(team);
        dispatch(openModalDeleteTeam());
    };
    const onEditTeam = (team: ITeamItem) => {
        setSelectedTeam(team);
        dispatch(openModalEditTeam());
    };
    const tableColumn = useMemo(() => (
        teamListColumns({
            onDelete: onDeleteTeam,
            onEdit: onEditTeam,
        })
    ), [onDeleteTeam, onEditTeam]);
    return (
        <div className='admin-user-list mt-2'>
            <EditTeamModal team={selectedTeam} />
            <DeleteTeamModal team={selectedTeam} />
            <Table
                dataSource={teamList}
                pagination={false}
                loading={isLoading}
                columns={tableColumn}
            />
        </div>
    );
};

export default MatchList;
