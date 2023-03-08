import { Col, Empty, Pagination, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as userBettedStatisticActions from '../../state/actions';
import coinImage from '../../../../../assets/images/coin.png';
import winIcon from '../../../../../assets/images/win-icon.png';
import loseIcon from '../../../../../assets/images/lose-icon.png';
import winRateIcon from '../../../../../assets/images/win-rate-icon.png';
import debtIcon from '../../../../../assets/images/debt-icon.png';
import UserBettedStatisticList from '../UserBettedStatisticList/UserBettedStatisticList';
import { State } from '../../../../../state-management/reducers';
import useScrollToTop from '../../../../../hooks/useScrollToTop';
import { defaultTitle } from '../../../../../utils/constants/title-page';
import useTitle from '../../../../../hooks/useTitle';
import usePagination from '../../../../../hooks/usePagination';
import { STATISTIC_LIST_PAGE_SIZE } from '../../../../../utils/constants/pagination';
import { routes } from '../../../../../utils/config/routes';
import { IUserBettedStatisticParams } from '../../interfaces/user-betted-statistic';

const UserBettedStatisticContent = () => {
  const dispatch = useDispatch();
  useScrollToTop();
  useTitle(`Your Statistic - ${defaultTitle}`);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const {
    pageSize: pageSizeMatch,
    pageCurrent: pageCurrentMatch,
    hasPage: hasPageMatch,
    onChangePagePagination: onChangePagePaginationMatch,
  } = usePagination(STATISTIC_LIST_PAGE_SIZE, routes.userBettedStatisticPath);

  const pageParam = queryParams.get('page');

  useEffect(() => {
    if (hasPageMatch) {
      const pageParams: IUserBettedStatisticParams = {
        page: pageParam,
        limit: STATISTIC_LIST_PAGE_SIZE,
      };
      dispatch(userBettedStatisticActions.getUserBettedStatisticRequest(pageParams));
    }
  }, [dispatch, hasPageMatch, pageParam]);

  const { userBettedStatisticResponse, isLoading } = useSelector((state: State) => state.userBettedStatistic);

  const antIcon = <LoadingOutlined className='font-size-40' spin />;
  if (isLoading) {
    return (
      <div className="user-betted-statistic-content flex-mid">
        <div className="spin">
          <Spin indicator={antIcon} />
        </div>
      </div>
    );
  }
  if (userBettedStatisticResponse === null) {
    return (<div className="user-betted-statistic-content"><Empty /></div>);
  }

  const { user, bets } = userBettedStatisticResponse.data;
  const { win: betWin, lose: betLose, winRate, debt } = user;
  const { data: matchBettedList, page } = bets;

  return (
    <div className="user-betted-statistic-content">
      <Row gutter={[16, 16]}>
        <Col xxl={6} xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="card-betted-statistic card-betted-statistic_win">
            <div className="d-flex flex-mid flex-column">
              <h3 className="card-betted-statistic__title">Win</h3>
              <h4 className="card-betted-statistic__number">{betWin}</h4>
            </div>
            <img
              src={winIcon}
              alt=""
            />
          </div>
        </Col>
        <Col xxl={6} xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="card-betted-statistic card-betted-statistic_lose">
            <div className="d-flex flex-mid flex-column">
              <h3 className="card-betted-statistic__title">Lose</h3>
              <h4 className="card-betted-statistic__number">{betLose}</h4>
            </div>
            <img
              src={loseIcon}
              alt=""
            />
          </div>
        </Col>
        <Col xxl={6} xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="card-betted-statistic card-betted-statistic_rate">
            <div className="d-flex flex-mid flex-column">
              <h3 className="card-betted-statistic__title">Winning Rate</h3>
              <h4 className="card-betted-statistic__number">{winRate}%</h4>
            </div>
            <img
              src={winRateIcon}
              alt=""
            />
          </div>
        </Col>
        <Col xxl={6} xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="card-betted-statistic card-betted-statistic_debt">
            <div className="d-flex flex-mid flex-column">
              <h3 className="card-betted-statistic__title">Credit</h3>
              <h4 className="card-betted-statistic__number card-betted-statistic__number_debt flex-mid">
                {debt > 0 ? `-${debt}` : `${debt}`}
                <img src={coinImage} alt='coin' />
              </h4>
            </div>
            <img
              src={debtIcon}
              alt=""
            />
          </div>
        </Col>
      </Row>
      {matchBettedList.length > 0
        && (
          <>
            <UserBettedStatisticList data={matchBettedList} />
            <div className="pagination">
              <Pagination
                pageSize={pageSizeMatch}
                current={pageCurrentMatch}
                total={page.total}
                onChange={onChangePagePaginationMatch}
                pageSizeOptions={[pageSizeMatch]}
              />
            </div>
          </>
        )}
    </div>
  );
};

export default UserBettedStatisticContent;
