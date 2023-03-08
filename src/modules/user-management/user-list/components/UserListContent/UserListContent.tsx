import { Input, Pagination } from 'antd';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import usePagination from '../../../../../hooks/usePagination';
import useTitle from '../../../../../hooks/useTitle';
import { State } from '../../../../../state-management/reducers';
import { routes } from '../../../../../utils/config/routes';
import { USER_LIST_PAGE_SIZE } from '../../../../../utils/constants/pagination';
import { defaultTitle, pageTitle } from '../../../../../utils/constants/title-page';
import { IGetUserListParams } from '../../interface/user-list';
import { getUserListRequest } from '../../state/actions';
import UserListTable from '../UserListTable/UserListTable';

const UserListContent = () => {
    useTitle(`${pageTitle.adminPage} - ${pageTitle.adminUserPage} - ${defaultTitle}`);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const {
        pageSize: pageSizeUserList,
        pageCurrent: pageCurrentUserList,
        hasPage: hasPageUserList,
        onChangePagePagination,
    } = usePagination(USER_LIST_PAGE_SIZE, routes.adminUserPath);

    const { totalItem } = useSelector((state: State) => state.userList);

    // config params for api
    const pageParam = queryParams.get('page');
    const userSearchParam = queryParams.get('userSearch');

    useEffect(() => {
        if (hasPageUserList) {
            const userListParams: IGetUserListParams = {
                page: pageParam,
                limit: pageSizeUserList,
                query: userSearchParam,
            };
            dispatch(getUserListRequest(userListParams));
        }
    }, [pageParam, userSearchParam, hasPageUserList, pageSizeUserList, dispatch]);

    const [userSearchInput, setUserSearchInput] = useState('');

    const onSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUserSearchInput(value);
    };

    const reloadWithSearchParam = useCallback(() => {
        if (location.pathname === routes.adminUserPath) {
            const hasUserSearchParam: boolean = queryParams.has('userSearch');
            if (!hasUserSearchParam) {
                queryParams.append('userSearch', userSearchInput);
            } else {
                queryParams.set('userSearch', userSearchInput);
            }
            queryParams.set('page', '1');

            if (userSearchInput === '') {
                queryParams.delete('userSearch');
            }
            const searchString: string = queryParams.toString();
            navigate(`${routes.adminUserPath}?${searchString}`);
        }
    }, [userSearchInput]);

    useEffect(() => {
        const identifier = setTimeout(() => {
            reloadWithSearchParam();
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [reloadWithSearchParam]);

    return (
        <div className='admin-user-list-content'>
            <Input.Search allowClear size='large' placeholder='Search user by name' className='navbar__search' onChange={onSearchUser} />
            <UserListTable />
            <div className="pagination">
                <Pagination
                    showQuickJumper
                    pageSize={pageSizeUserList}
                    current={pageCurrentUserList}
                    total={totalItem}
                    onChange={onChangePagePagination}
                    pageSizeOptions={[pageSizeUserList]}
                />
            </div>
        </div>
    );
};

export default UserListContent;
