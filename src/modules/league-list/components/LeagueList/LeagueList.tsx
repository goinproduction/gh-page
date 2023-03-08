import { LoadingOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Image from '../../../../components/Image/Image';
import { State } from '../../../../state-management/reducers';
import { routes } from '../../../../utils/config/routes';
import { ILeagueItem } from '../../interfaces/league-list';
import { getLeagueListRequest } from '../../state/action';

const LeagueList = () => {
    const { leagueList, isLoading } = useSelector((state: State) => state.leagueList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const getBackground = (background: string) => {
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        let imageSrc = background;
        if (!background.startsWith('http')) {
            imageSrc = `${BASE_URL as string}${background.replace('src/', '')}`;
        }
        return imageSrc;
    };
    useEffect(() => {
        dispatch(getLeagueListRequest());
    }, [dispatch]);
    const navigateToMatchPage = (leagueId: string) => {
        queryParams.append('leagueFilter', leagueId);
        queryParams.set('page', '1');
        const searchString: string = queryParams.toString();
        navigate(`${routes.matchPath}?${searchString}`);
    };
    return (
        <div className='league-list'>
            <h1 className='mb-1'>POPULAR LEAGUES</h1>
            <Row gutter={[12, 12]}>
                {isLoading
                    ? (
                        <div className='w-100 league-list__loading flex-mid'>
                            <LoadingOutlined className='league-list__loading-icon' />
                        </div>
                    )
                    : leagueList.map((league: ILeagueItem) => (
                        <Col key={league.id} lg={12} xl={12} xxl={8} md={12} xs={12} sm={12}>
                            <button onClick={() => navigateToMatchPage(league.id)} className='league-item w-100' style={{ backgroundImage: `url(${getBackground(league.background)})` }}>
                                <Image className='league-logo' src={league.logo} />
                                <p> {league.name} </p>
                            </button>
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default LeagueList;
