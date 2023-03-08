import { Col, Row } from 'antd';
import { columnUserBettedStatistic } from '../../../../../utils/constants/column-user-betted-statistic';
import { IMatchStatisticItem } from '../../interfaces/user-betted-statistic';
import UserBettedStatisticItem from '../UserBettedStatisticMatchItem/UserBettedStatisticItem';

type Props = {
    data: Array<IMatchStatisticItem>;
}

const UserBettedStatisticList = (props: Props) => {
    const { data } = props;
    return (
        <>
            <Row>
                <div className="statistic-list">
                    <Col
                        xxl={columnUserBettedStatistic.team.xxl}
                        xl={columnUserBettedStatistic.team.xl}
                        lg={columnUserBettedStatistic.team.lg}
                        md={columnUserBettedStatistic.team.md}
                        sm={columnUserBettedStatistic.team.sm}
                        xs={columnUserBettedStatistic.team.xs}
                    >
                        <div className="statistic-list__title">Home Team</div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.score.xxl}
                        xl={columnUserBettedStatistic.score.xl}
                        lg={columnUserBettedStatistic.team.lg}
                        md={columnUserBettedStatistic.score.md}
                        sm={columnUserBettedStatistic.score.sm}
                        xs={columnUserBettedStatistic.score.xs}
                    >
                        <div className="statistic-list__title">Score</div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.team.xxl}
                        xl={columnUserBettedStatistic.team.xl}
                        lg={columnUserBettedStatistic.team.lg}
                        md={columnUserBettedStatistic.team.md}
                        sm={columnUserBettedStatistic.team.sm}
                        xs={columnUserBettedStatistic.team.xs}
                    >
                        <div className="statistic-list__title">Away Team</div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.league.xxl}
                        xl={columnUserBettedStatistic.league.xl}
                        lg={columnUserBettedStatistic.league.lg}
                        md={columnUserBettedStatistic.league.md}
                        sm={columnUserBettedStatistic.league.sm}
                        xs={columnUserBettedStatistic.league.xs}
                    >
                        <div className="statistic-list__title">League</div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.matchTime.xxl}
                        xl={columnUserBettedStatistic.matchTime.xl}
                        lg={columnUserBettedStatistic.matchTime.lg}
                        md={columnUserBettedStatistic.matchTime.md}
                        sm={columnUserBettedStatistic.matchTime.sm}
                        xs={columnUserBettedStatistic.matchTime.xs}
                    >
                        <div className="statistic-list__title">Match Time</div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.betChose.xxl}
                        xl={columnUserBettedStatistic.betChose.xl}
                        lg={columnUserBettedStatistic.betChose.lg}
                        md={columnUserBettedStatistic.betChose.md}
                        sm={columnUserBettedStatistic.betChose.sm}
                        xs={columnUserBettedStatistic.betChose.xs}
                    >
                        <div className="statistic-list__title">Bet Choose</div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.betAmount.xxl}
                        xl={columnUserBettedStatistic.betAmount.xl}
                        lg={columnUserBettedStatistic.betAmount.lg}
                        md={columnUserBettedStatistic.betAmount.md}
                        sm={columnUserBettedStatistic.betAmount.sm}
                        xs={columnUserBettedStatistic.betAmount.xs}
                    >
                        <div className="statistic-list__title">Bet Amount</div>
                    </Col>
                </div>
            </Row>
            {data.map((match) => <UserBettedStatisticItem key={match.id} data={match} />)}
        </>
    );
};

export default UserBettedStatisticList;
