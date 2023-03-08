import { LoadingOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Empty, Menu, Pagination, Row, Spin } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useDetectMatchingBreakpoint from '../../hooks/useDetectMatchingBreakpoint';
import usePagination from '../../hooks/usePagination';
import useTitle from '../../hooks/useTitle';
import SidebarFilter from '../../modules/league-list/components/SidebarFilter/SidebarFilter';
import MatchList from '../../modules/match-management/match-list/components/MatchList/MatchList';
import { IFilterMatchParams } from '../../modules/match-management/match-list/interfaces/match-list';
import * as matchListActions from '../../modules/match-management/match-list/state/actions';
import { State } from '../../state-management/reducers';
import { routes } from '../../utils/config/routes';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';
import { matchStatus } from '../../utils/constants/match-status';
import { DEFAULT_PAGE_SIZE } from '../../utils/constants/pagination';

const MatchPage = () => {
    useTitle(`${pageTitle.matchPage} - ${defaultTitle}`);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const { matchList, isLoading: isLoadingGetMatchList, totalItem } = useSelector((state: State) => state.matchList);
    const isMatchListEmpty = matchList.length === 0;

    const { currentLeagueId } = useSelector((state: State) => state.leagueList);

    // Check window size
    const tabletWidth = 991;
    const { isMatchingBreakpoint: isTablet } = useDetectMatchingBreakpoint(tabletWidth);

    // SidebarFiler visible
    const [isSidebarFilterVisible, setIsSidebarFilterVisible] = useState(false);

    const showSidebar = () => {
        setIsSidebarFilterVisible(true);
    };
    const closeSidebar = () => {
        setIsSidebarFilterVisible(false);
    };
    // hide sidebar when change filer league
    useEffect(() => {
        setIsSidebarFilterVisible(false);
    }, [currentLeagueId]);

    const classButtonOpenSidebar = `button-open-sidebar-filter ${currentLeagueId !== 'all' ? 'button-open-sidebar-filter_active' : ''}`;

    const changePageMatchStatus = (e: MenuInfo) => {
        const statusMatch: string = e.key.toString();

        const isFilterStatus: boolean = queryParams.has('matchStatus');
        if (!isFilterStatus) {
            queryParams.append('matchStatus', statusMatch);
        } else {
            queryParams.set('matchStatus', statusMatch);
        }
        queryParams.set('page', '1');

        if (statusMatch === 'all') {
            queryParams.delete('matchStatus');
        }
        const searchString: string = queryParams.toString();
        navigate(`/match?${searchString}`);
    };

    const {
        pageSize: pageSizeMatch,
        pageCurrent: pageCurrentMatch,
        hasPage: hasPageMatch,
        onChangePagePagination: onChangePagePaginationMatch,
    } = usePagination(DEFAULT_PAGE_SIZE, routes.matchPath);

    // config params for api
    const pageParam = queryParams.get('page');
    const matchStatusParam = queryParams.get('matchStatus');
    const leagueFilterParam = queryParams.get('leagueFilter');
    const keyWordParam = queryParams.get('keyword');

    const defaultMatchStatus = matchStatusParam !== null ? matchStatusParam : matchStatus.upComing.toString();

    useEffect(() => {
        if (hasPageMatch) {
            const filterParams: IFilterMatchParams = {
                page: pageParam,
                matchStatus: defaultMatchStatus,
                filterLeague: leagueFilterParam,
                keyword: keyWordParam,
                limit: DEFAULT_PAGE_SIZE,
            };
            dispatch(matchListActions.getMatchListRequest(filterParams));
            window.scrollTo(0, 0);
        }
    }, [pageParam, defaultMatchStatus, leagueFilterParam, hasPageMatch, keyWordParam, dispatch]);

    const antIcon = <LoadingOutlined className='font-size-40' spin />;

    return (
        <Row>
            {!isSidebarFilterVisible && isTablet && (
                <Button
                    type="primary"
                    onClick={showSidebar}
                    className={classButtonOpenSidebar}
                >
                    <SettingOutlined />
                </Button>
            )}
            {isTablet && (
                <Drawer
                    title="Filter Matches"
                    placement="right"
                    onClose={closeSidebar}
                    visible={isSidebarFilterVisible}
                    className="sidebar-filter"
                >
                    <SidebarFilter />
                </Drawer>
            )}
            <Col xxl={4} xl={6} lg={7} md={0} sm={0} xs={0}>
                {!isTablet
                    && (
                        <div className="filter-large-screen">
                            <SidebarFilter />
                        </div>
                    )}
            </Col>
            <Col xxl={20} xl={18} lg={17} md={24} sm={24} xs={24}>
                <div className="matches-page-content">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultMatchStatus]} onClick={changePageMatchStatus}>
                        <Menu.Item key={matchStatus.upComing}>Up Coming</Menu.Item>
                        <Menu.Item key={matchStatus.live}>Live</Menu.Item>
                        <Menu.Item key={matchStatus.past}>Past</Menu.Item>
                    </Menu>
                    {isLoadingGetMatchList
                        && (
                            <div className="matches-page-content__spin-container">
                                <div className="spin">
                                    <Spin indicator={antIcon} />
                                </div>
                            </div>
                        )}
                    {isMatchListEmpty && !isLoadingGetMatchList && (
                        <div className="match-list-content_none">
                            <div className="bet-page-content__empty"><Empty /></div>
                        </div>
                    )}
                    {!isMatchListEmpty && !isLoadingGetMatchList && (
                        <div className="match-list-content">
                            <MatchList data={matchList} />
                        </div>
                    )}
                    <div className="pagination">
                        <Pagination
                            pageSize={pageSizeMatch}
                            current={pageCurrentMatch}
                            total={totalItem}
                            onChange={onChangePagePaginationMatch}
                            pageSizeOptions={[pageSizeMatch]}
                        />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default MatchPage;
