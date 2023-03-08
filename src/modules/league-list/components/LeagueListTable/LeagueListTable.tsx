/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/Button/Button';
import { State } from '../../../../state-management/reducers';
import { defaultSelectedLeague } from '../../../../utils/constants/default-model';
import AddLeagueModal from '../../../league-management/modals/components/AddLeagueModal/AddLeagueModal';
import DeleteLeagueModal from '../../../league-management/modals/components/DeleteLeagueModal/DeleteLeagueModal';
import EditLeagueModal from '../../../league-management/modals/components/EditLeagueModal/EditLeagueModal';
import { openModalAddLeague, openModalDeleteLeague, openModalEditLeague } from '../../../league-management/modals/state/actions';
import { ILeagueItem } from '../../interfaces/league-list';
import { getLeagueListRequest } from '../../state/action';
import { leagueListColumns } from './LeagueListColumn';

const LeagueListTable = () => {
    const { leagueList, isLoading } = useSelector((state: State) => state.leagueList);
    const [selectedLeague, setSelectedLeague] = useState<ILeagueItem>(defaultSelectedLeague);
    const dispatch = useDispatch();
    const onDeleteLeague = (league: ILeagueItem) => {
        setSelectedLeague(league);
        dispatch(openModalDeleteLeague());
    };
    const onEditLeague = (league: ILeagueItem) => {
        setSelectedLeague(league);
        dispatch(openModalEditLeague());
    };
    const tableColumn = useMemo(() => (
        leagueListColumns({
            onDelete: onDeleteLeague,
            onEdit: onEditLeague,
        })
    ), [onDeleteLeague, onEditLeague]);
    const openModal = () => {
        dispatch(openModalAddLeague());
    };
    useEffect(() => {
        dispatch(getLeagueListRequest());
    }, []);
    return (
        <div className='admin-match mt-2'>
            <Button onClick={openModal} htmlType='button'><i className='fal fa-plus left-icon' />New League</Button>
            <AddLeagueModal />
            <EditLeagueModal league={selectedLeague} />
            <DeleteLeagueModal league={selectedLeague} />
            <Table
                className='mt-2'
                dataSource={leagueList}
                pagination={false}
                loading={isLoading}
                columns={tableColumn}
            />
        </div>
    );
};

export default LeagueListTable;
