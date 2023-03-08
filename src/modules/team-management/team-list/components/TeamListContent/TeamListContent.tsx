import { Pagination, Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../../components/Button/Button';
import usePagination from '../../../../../hooks/usePagination';
import useTitle from '../../../../../hooks/useTitle';
import { State } from '../../../../../state-management/reducers';
import { routes } from '../../../../../utils/config/routes';
import { USER_LIST_PAGE_SIZE } from '../../../../../utils/constants/pagination';
import { defaultTitle, pageTitle } from '../../../../../utils/constants/title-page';
import { getLeagueListRequest } from '../../../../league-list/state/action';
import AddTeamModal from '../../../modals/components/AddTeamModal/AddTeamModal';
import { openModalAddTeam } from '../../../modals/state/actions';
import { IGetTeamListParams } from '../../interfaces/team-list';
import { getTeamListRequest } from '../../state/actions';
import TeamListTable from '../TeamListTable/TeamListTable';

const { Option } = Select;

const TeamListContent = () => {
    useTitle(`${pageTitle.adminPage} - ${pageTitle.adminTeamPage} - ${defaultTitle}`);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const {
        pageSize: pageSizeTeamList,
        pageCurrent: pageCurrentTeamList,
        hasPage: hasPageTeamList,
        onChangePagePagination,
    } = usePagination(USER_LIST_PAGE_SIZE, routes.adminTeamPath);

    const onFilterLeague = (value: string) => {
        const hasLeagueIdParam: boolean = queryParams.has('leagueId');
        if (!hasLeagueIdParam) {
            queryParams.append('leagueId', value);
        } else {
            queryParams.set('leagueId', value);
        }
        queryParams.set('page', '1');

        if (value === '') {
            queryParams.delete('leagueId');
        }
        const searchString: string = queryParams.toString();
        navigate(`${routes.adminTeamPath}?${searchString}`);
    };

    const { totalItem } = useSelector((state: State) => state.teamList);
    const { leagueList } = useSelector((state: State) => state.leagueList);

    // config params for api
    const pageParam = queryParams.get('page');
    const leagueIdParam = queryParams.get('leagueId');
    const openModal = () => {
        dispatch(openModalAddTeam());
    };

    useEffect(() => {
        if (hasPageTeamList) {
            const teamListParams: IGetTeamListParams = {
                page: pageParam,
                limit: USER_LIST_PAGE_SIZE.toString(),
                leagueId: leagueIdParam || '',
            };
            dispatch(getTeamListRequest(teamListParams));
        }
    }, [pageParam, leagueIdParam, hasPageTeamList, dispatch]);

    useEffect(() => {
        dispatch(getLeagueListRequest());
    }, [dispatch]);
    return (
        <div className='admin-team-list-content'>
            <AddTeamModal />
            <div className='d-flex justify-content-between'>
                <Button htmlType='button' onClick={openModal}>Add New Team</Button>
                <div className='d-flex align-items-center ml-2'>
                    <h4>Filter League: </h4>
                    <Select
                        defaultValue="All"
                        showSearch
                        placeholder="Select a league"
                        optionFilterProp="children"
                        onChange={onFilterLeague}
                        className='select-league-filter-team w-100'
                    >
                        <Option value=''>All</Option>
                        {leagueList.map((league) => (
                            <Option key={league.id} value={league.id}>{league.name}</Option>
                        ))}
                    </Select>
                </div>
            </div>
            <TeamListTable />
            <div className="pagination">
                <Pagination
                    showQuickJumper
                    pageSize={pageSizeTeamList}
                    current={pageCurrentTeamList}
                    total={totalItem}
                    onChange={onChangePagePagination}
                    pageSizeOptions={[pageSizeTeamList]}
                />
            </div>
        </div>
    );
};

export default TeamListContent;
