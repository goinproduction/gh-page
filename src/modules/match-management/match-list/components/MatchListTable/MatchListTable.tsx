/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Pagination, Table } from 'antd';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../../../../../components/Button/Button';
import usePagination from '../../../../../hooks/usePagination';
import useTitle from '../../../../../hooks/useTitle';
import { State } from '../../../../../state-management/reducers';
import { routes } from '../../../../../utils/config/routes';
import { DEFAULT_PAGE_SIZE } from '../../../../../utils/constants/pagination';
import { defaultTitle, pageTitle } from '../../../../../utils/constants/title-page';
import AddMatchModal from '../../../modals/components/AddMatchModal/AddMatchModal';
import DeleteMatchModal from '../../../modals/components/DeleteMatchModal/DeleteMatchModal';
import EditMatchModal from '../../../modals/components/EditMatchModal/EditMatchModal';
import { openModalAddMatch, openModalDeleteMatch, openModalEditMatch } from '../../../modals/state/actions';
import { IFilterMatchParams, IMatchInfo } from '../../interfaces/match-list';
import { getMatchListRequest } from '../../state/actions';
import { matchColumns } from './MatchColumns';

const MatchListTable = () => {
    useTitle(`${pageTitle.adminPage} - ${pageTitle.adminMatchPage} - ${defaultTitle}`);
    const dispatch = useDispatch();
    const { matchList, isLoading, totalItem } = useSelector((state: State) => state.matchList);
    const {
        pageSize,
        pageCurrent,
        onChangePagePagination,
    } = usePagination(DEFAULT_PAGE_SIZE, routes.adminMatchPath);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const pageParam = queryParams.get('page');
    const params: IFilterMatchParams = {
        page: pageParam,
        matchStatus: null,
        filterLeague: null,
        keyword: null,
        limit: DEFAULT_PAGE_SIZE,
    };
    const openModal = () => {
        dispatch(openModalAddMatch());
    };
    const onEditMatch = (match: IMatchInfo) => {
        dispatch(openModalEditMatch(match));
    };
    const onDeleteMatch = (match: IMatchInfo) => {
        if (!match.isPulished) {
            dispatch(openModalDeleteMatch(match));
        } else {
            Modal.warning({
                title: 'Warning',
                content: (
                    <h4 className='color-dark'>
                        Can not delete matches which users has bet on
                    </h4>
                ),
            });
        }
    };
    const columns = useMemo(() => (
        matchColumns({
            onEditMatch,
            onDeleteMatch,
        })
    ), [onEditMatch]);
    useEffect(() => {
        dispatch(getMatchListRequest(params));
    }, [pageParam]);
    return (
        <div className='admin-match'>
            <AddMatchModal />
            <EditMatchModal />
            <DeleteMatchModal />
            <Button onClick={openModal} htmlType='button'>Add New Match</Button>
            <Table
                className='match-table mt-2'
                dataSource={matchList}
                pagination={false}
                loading={isLoading}
                columns={columns}
            />
            <div className="pagination">
                <Pagination
                    showQuickJumper
                    pageSize={pageSize}
                    current={pageCurrent}
                    total={totalItem}
                    onChange={onChangePagePagination}
                    pageSizeOptions={[pageSize]}
                />
            </div>
        </div>
    );
};

export default MatchListTable;
