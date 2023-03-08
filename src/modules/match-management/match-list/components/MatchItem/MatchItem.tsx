/* eslint-disable no-nested-ternary */
import {
    PauseCircleOutlined,
} from '@ant-design/icons';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import Image from '../../../../../components/Image/Image';
import { routes } from '../../../../../utils/config/routes';
import { betStatus } from '../../../../../utils/constants/bet-status';
import { matchStatus } from '../../../../../utils/constants/match-status';
import { getDateTimeSpecific } from '../../../../../utils/get-date-time-specific';
import { IMatchItem } from '../../interfaces/match-list';

type Props = {
    data: IMatchItem
};

const MatchItem = (props: Props) => {
    const { data } = props;
    const { userBettedStatus, match } = data;
    const teamHome = match.homeTeam;
    const teamAway = match.awayTeam;

    const startTimeDate = new Date(match.startTime);

    const { dateDay, monthName, dateYear, timeHour, timeMinute } = getDateTimeSpecific(startTimeDate);

    const teamHomeScore = match.scoreTeamHome;
    const teamAwayScore = match.scoreTeamAway;

    const matchStatusLive = match.status === matchStatus.live && (
        <div className="match-item_live">
            <PauseCircleOutlined />
            <span>Live</span>
        </div>
    );

    const matchStatusPast = match.status === matchStatus.past && (
        <div className="match-item__info-score">
            <span>{teamHomeScore}</span>
            <span className="match-item__info-score_pain"> : </span>
            <span>{teamAwayScore}</span>
        </div>
    );

    const betStatusBadge = (userBettedStatus === betStatus.pending) ? <div className="match-item__betted_pending" />
        : (userBettedStatus === betStatus.win) ? <div className="match-item__betted_win" />
            : (userBettedStatus === betStatus.lose) ? <div className="match-item__betted_lose" />
                : <div />;
    return (
        <Col xxl={8} xl={12} lg={24} md={12} sm={24} xs={24}>
            <div className="match-item">
                <Link to={routes.matchDetailPath.replace(':matchId', match.id)} className="match-item__link" />
                <div className="match-item__league">
                    <i className="match-item__league-icon">
                        <Image src={match.league.logo} />
                    </i>
                    {match.league.name}
                </div>
                {matchStatusLive}
                {betStatusBadge}
                <div className="match-item__team match-item__team_home">
                    <div className="match-item__team-logo">
                        <Image
                            src={teamHome.logo}
                        />
                    </div>
                    <h3 className="match-item__team-name">{teamHome.name}</h3>
                </div>
                <div className="match-item__info">
                    {match.status !== matchStatus.past && (
                        <div className="match-item__info-time">
                            <span>{timeHour} : {timeMinute}</span>
                        </div>
                    )}
                    {matchStatusPast}
                    <div className="match-item__info-date">
                        <span>{dateDay} - {monthName} - {dateYear}</span>
                    </div>
                </div>
                <div className="match-item__team match-item__team_away">
                    <div className="match-item__team-logo">
                        <Image
                            src={teamAway.logo}
                        />
                    </div>
                    <h3 className="match-item__team-name">{teamAway.name}</h3>
                </div>
            </div>
        </Col>
    );
};

export default MatchItem;
