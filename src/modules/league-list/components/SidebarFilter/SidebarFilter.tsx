import { GlobalOutlined } from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { State } from '../../../../state-management/reducers';
import { routes } from '../../../../utils/config/routes';
import { DEFAULT_FILTER_PARAM } from '../../../../utils/default-params';
import { ILeagueItem } from '../../interfaces/league-list';
import * as filterActions from '../../state/action';

const SidebarFilter = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);

    const { leagueList } = useSelector((state: State) => state.leagueList);

    const onChangeLeague = (event: any) => {
        const leagueId: string = event.target.value;
        dispatch(filterActions.chooseFilterLeague(leagueId));

        const isFilterLeague: boolean = queryParams.has('leagueFilter');
        if (!isFilterLeague) {
            queryParams.append('leagueFilter', leagueId);
        } else {
            queryParams.set('leagueFilter', leagueId);
        }
        queryParams.set('page', '1');

        if (leagueId === 'all') {
            queryParams.delete('leagueFilter');
        }

        const searchString: string = queryParams.toString();
        navigate(`${routes.matchPath}?${searchString}`);
    };

    const leagueFilterParam = queryParams.get('leagueFilter');

    const defaultLeagueFilter = leagueFilterParam !== null ? leagueFilterParam.toString() : DEFAULT_FILTER_PARAM;

    useEffect(() => {
        dispatch(filterActions.getLeagueListRequest());
    }, [dispatch]);

    return (
        <div className="filter">
            <div className="filter__title">
                <h3>
                    <GlobalOutlined />
                    League
                </h3>
            </div>
            <Radio.Group
                onChange={onChangeLeague}
                defaultValue={defaultLeagueFilter}
                className="filter__group"
            >
                <Row gutter={[0, 30]}>
                    <Col span={24}>
                        <Radio value="all" className="filter__radio">
                            All
                        </Radio>
                    </Col>
                    {leagueList.map((item: ILeagueItem) => (
                        <Col span={24} key={item.id}>
                            <Radio value={item.id.toString()} className="filter__radio">
                                {item.name}
                            </Radio>
                        </Col>
                    ))}
                </Row>
            </Radio.Group>
        </div>
    );
};
export default SidebarFilter;
