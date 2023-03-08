import {
    LoadingOutlined,
} from '@ant-design/icons';
import { Empty, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import useTitle from '../../hooks/useTitle';
import MatchDetail from '../../modules/match-management/match-detail/components/MatchDetail/MatchDetail';
import * as matchDetailActions from '../../modules/match-management/match-detail/state/actions';
import ConfirmBetModal from '../../modules/modal-bet/components/ConfirmBetModal/ConfirmBetModal';
import { State } from '../../state-management/reducers';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';

const BetPage = () => {
    useScrollToTop();
    useTitle(`${pageTitle.betPage} - ${defaultTitle}`);
    const dispatch = useDispatch();
    const params = useParams();
    const { matchId } = params;

    useEffect(() => {
        if (matchId !== undefined) {
            dispatch(matchDetailActions.getMatchDetailRequest(matchId));
        }
    }, [dispatch, matchId]);

    const { matchDetail, isLoading } = useSelector((state: State) => state.matchDetail);

    const antIcon = <LoadingOutlined className='font-size-40' spin />;

    if (isLoading) {
        return (
            <div className="bet-page-content">
                <div className="bet-page-content__spin">
                    <div className="spin">
                        <Spin indicator={antIcon} />
                    </div>
                </div>
            </div>
        );
    }

    if (matchDetail === null && !isLoading) {
        return (
            <div className="bet-page-content">
                <div className="bet-page-content__empty"><Empty /></div>
            </div>
        );
    }

    return (
        <>
            <ConfirmBetModal matchId={matchId} />
            {matchDetail !== null && !isLoading && <MatchDetail dataMatch={matchDetail} />}
        </>

    );
};

export default BetPage;
