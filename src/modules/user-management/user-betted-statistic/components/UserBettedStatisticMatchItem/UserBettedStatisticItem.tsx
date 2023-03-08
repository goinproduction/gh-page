/* eslint-disable no-nested-ternary */
import { Col, Row, Badge, Tag } from 'antd';
import { Link } from 'react-router-dom';
import coinImage from '../../../../../assets/images/coin.png';
import Image from '../../../../../components/Image/Image';
import { routes } from '../../../../../utils/config/routes';
import { betStatus } from '../../../../../utils/constants/bet-status';
import { columnUserBettedStatistic } from '../../../../../utils/constants/column-user-betted-statistic';
import { getDateTimeSpecific } from '../../../../../utils/get-date-time-specific';
import { IMatchStatisticItem } from '../../interfaces/user-betted-statistic';

type Props = {
    data: IMatchStatisticItem
}

const UserBettedStatisticItem = (props: Props) => {
    const { data } = props;

    const { userBettedStatus, teamBet, match } = data;
    const { betAmount, handicap, homeTeam, awayTeam, league, scoreTeamHome, scoreTeamAway, startTime, id: matchId } = match;

    const teamHome = homeTeam;
    const teamAway = awayTeam;

    const teamHomeScore = scoreTeamHome;
    const teamAwayScore = scoreTeamAway;

    let handicapScoreTeamHome = 0;
    let handicapScoreTeamAway = 0;
    if (handicap > 0) {
        handicapScoreTeamAway = Math.abs(handicap);
    } else {
        handicapScoreTeamHome = Math.abs(handicap);
    }

    const startTimeDate = new Date(startTime);

    const { dateDay: dateDayMatchTime,
        dateYear: dateYearMatchTime,
        monthName: monthNameMatchTime } = getDateTimeSpecific(startTimeDate);

    const getStyleRibbon = () => {
        switch (userBettedStatus) {
            case betStatus.win: {
                return { text: 'Win', color: '#19ad25' };
            }
            case betStatus.lose: {
                return { text: 'Lose', color: '#cf1322' };
            }
            default:
                return { text: '', color: '' };
        }
    };

    const styleRibbon = getStyleRibbon();

    const tagBetChoose = teamBet === teamHome.id ? <Tag color="#ff4747">Home Team</Tag>
        : teamBet === teamAway.id ? <Tag color="#4f7aed">Away Team</Tag>
            : <Tag color="#464646">Draw</Tag>;

    return (
        <Row>
            <Badge.Ribbon text={styleRibbon.text} color={styleRibbon.color}>
                <div className="statistic-match ">
                    <Link to={routes.matchDetailPath.replace(':matchId', matchId)} className="statistic-match__link" />
                    <Col
                        xxl={columnUserBettedStatistic.team.xxl}
                        xl={columnUserBettedStatistic.team.xl}
                        lg={columnUserBettedStatistic.team.lg}
                        md={columnUserBettedStatistic.team.md}
                        sm={columnUserBettedStatistic.team.sm}
                        xs={columnUserBettedStatistic.team.xs}
                    >
                        <div className="statistic-match__container-item statistic-match__container-item_team">
                            <Image className="statistic-match__team-logo" src={teamHome.logo} alt='team-home' />
                            <h4 className="statistic-match__team-name">{teamHome.name}</h4>
                        </div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.score.xxl}
                        xl={columnUserBettedStatistic.score.xl}
                        lg={columnUserBettedStatistic.team.lg}
                        md={columnUserBettedStatistic.score.md}
                        sm={columnUserBettedStatistic.score.sm}
                        xs={columnUserBettedStatistic.score.xs}
                    >
                        <div className="statistic-match__container-item">
                            <p className="statistic-match__score-main">{teamHomeScore} : {teamAwayScore}</p>
                            <p className="statistic-match__score-handicap">{handicapScoreTeamHome} (Handicap) {handicapScoreTeamAway}</p>
                        </div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.team.xxl}
                        xl={columnUserBettedStatistic.team.xl}
                        lg={columnUserBettedStatistic.team.lg}
                        md={columnUserBettedStatistic.team.md}
                        sm={columnUserBettedStatistic.team.sm}
                        xs={columnUserBettedStatistic.team.xs}
                    >
                        <div className="statistic-match__container-item statistic-match__container-item_team">
                            <Image className="statistic-match__team-logo" src={teamAway.logo} alt='team-away' />
                            <h4 className="statistic-match__team-name">{teamAway.name}</h4>
                        </div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.league.xxl}
                        xl={columnUserBettedStatistic.league.xl}
                        lg={columnUserBettedStatistic.league.lg}
                        md={columnUserBettedStatistic.league.md}
                        sm={columnUserBettedStatistic.league.sm}
                        xs={columnUserBettedStatistic.league.xs}
                    >
                        <div className="statistic-match__container-item">
                            <h4 className="statistic-match__team-name flex-mid">
                                <Image
                                    className="statistic-match__small-logo"
                                    src={league.logo}
                                    alt='league'
                                />
                                {league.name}
                            </h4>
                        </div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.matchTime.xxl}
                        xl={columnUserBettedStatistic.matchTime.xl}
                        lg={columnUserBettedStatistic.matchTime.lg}
                        md={columnUserBettedStatistic.matchTime.md}
                        sm={columnUserBettedStatistic.matchTime.sm}
                        xs={columnUserBettedStatistic.matchTime.xs}
                    >
                        <div className="statistic-match__container-item">
                            <p className="statistic-match__text-item">{dateDayMatchTime}-{monthNameMatchTime}-{dateYearMatchTime}</p>
                        </div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.betChose.xxl}
                        xl={columnUserBettedStatistic.betChose.xl}
                        lg={columnUserBettedStatistic.betChose.lg}
                        md={columnUserBettedStatistic.betChose.md}
                        sm={columnUserBettedStatistic.betChose.sm}
                        xs={columnUserBettedStatistic.betChose.xs}
                    >
                        <div className="statistic-match__container-item">
                            <p className="statistic-match__text-item">{tagBetChoose}</p>
                        </div>
                    </Col>
                    <Col
                        xxl={columnUserBettedStatistic.betAmount.xxl}
                        xl={columnUserBettedStatistic.betAmount.xl}
                        lg={columnUserBettedStatistic.betAmount.lg}
                        md={columnUserBettedStatistic.betAmount.md}
                        sm={columnUserBettedStatistic.betAmount.sm}
                        xs={columnUserBettedStatistic.betAmount.xs}
                    >
                        <div className="statistic-match__container-item">
                            <p className="statistic-match__text-item flex-mid">
                                {betAmount}
                                <img
                                    className="statistic-match__small-logo"
                                    src={coinImage}
                                    alt='currency'
                                />
                            </p>
                        </div>
                    </Col>
                </div>
            </Badge.Ribbon>
        </Row>
    );
};

export default UserBettedStatisticItem;
