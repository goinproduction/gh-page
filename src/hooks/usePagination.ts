import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const usePagination = (pageSize: number, url: string) => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    // Check if not have param "page", add page param to URLSearchParams
    const hasPage: boolean = queryParams.has('page');
    useEffect(() => {
        if (!hasPage) {
            queryParams.append('page', '1');
            const searchString: string = queryParams.toString();
            navigate(`${url}?${searchString}`);
        }
    }, [hasPage, navigate]);

    const pageParam = queryParams.get('page');
    let pageCurrent = 1;
    if (pageParam !== null) {
        pageCurrent = +pageParam;
    }

    const onChangePagePagination = (selected: number) => {
        const pageSelected: number = selected;
        if (hasPage) {
            queryParams.set('page', pageSelected.toString());
            const searchString: string = queryParams.toString();
            navigate(`${url}?${searchString}`);
        } else {
            navigate(`${url}`);
        }
    };

    return { pageSize, pageCurrent, hasPage, onChangePagePagination };
};

export default usePagination;
