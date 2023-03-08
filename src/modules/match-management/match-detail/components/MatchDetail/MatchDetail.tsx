import {
    CalendarOutlined,
    ClockCircleOutlined,
    UserOutlined,
    PauseCircleOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import coinImage from '../../../../../assets/images/coin.png';
import useTitle from '../../../../../hooks/useTitle';
import { State } from '../../../../../state-management/reducers';
import { routes } from '../../../../../utils/config/routes';
import { defaultTitle } from '../../../../../utils/constants/title-page';
import { matchStatus } from '../../../../../utils/constants/match-status';
import { roles } from '../../../../../utils/constants/role';
import { getDateTimeSpecific } from '../../../../../utils/get-date-time-specific';
import * as betActions from '../../../../modal-bet/state/actions';
import { ITeamMatch } from '../../../match-list/interfaces/match-list';
import { IMatchDetail } from '../../interfaces/match-detail';
import Image from '../../../../../components/Image/Image';

type Props = {
    dataMatch: IMatchDetail
}

const MatchDetail = (props: Props) => {
    const { dataMatch } = props;
    const { data } = dataMatch;
    const { match } = data;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { teamUserBet, teamBetQuantity } = useSelector((state: State) => state.matchDetail);
    const { userInfo } = useSelector((state: State) => state.auth);

    const teamHome = match.homeTeam;
    const teamAway = match.awayTeam;

    useTitle(`${teamHome.name} vs ${teamAway.name} | ${defaultTitle}`);

    const startTimeDate = new Date(match.startTime);

    const { dateDay, monthName, dateYear, timeHour, timeMinute, timeCount } = getDateTimeSpecific(startTimeDate);

    const timeLeft = timeCount - Date.now();
    const isMoreThanOneDay = timeLeft * (25 / 9) * 10 ** -7 > 24;

    let handicapScoreTeamHome = 0;
    let handicapScoreTeamAway = 0;
    if (match.handicap > 0) {
        handicapScoreTeamAway = Math.abs(match.handicap);
    } else {
        handicapScoreTeamHome = Math.abs(match.handicap);
    }

    const teamHomeScore = match.scoreTeamHome;
    const teamAwayScore = match.scoreTeamAway;

    const peopleNumberBetTeamHome = teamBetQuantity[0];
    const peopleNumberBetDraw = teamBetQuantity[2];
    const peopleNumberBetTeamAway = teamBetQuantity[1];

    const classTeamHomeChoose = `${+teamUserBet === +teamHome.id ? 'bet-active' : ''} `;

    const classDrawChoose = `${+teamUserBet === 0 ? 'bet-active' : ''} `;

    const classTeamAwayChoose = `${+teamUserBet === +teamAway.id ? 'bet-active' : ''} `;

    const drawOption: ITeamMatch = {
        id: '0',
        name: 'Draw',
        logo: '',
    };

    const onChooseTeamHandler = (team: ITeamMatch) => {
        if (userInfo.role !== roles.USER_ROLE) {
            Modal.confirm({
                title: 'Failed to bet',
                content: (<div><p className="font-size-16">You need to login first to make a bet</p></div>),
                centered: true,
                onOk: () => { navigate(routes.loginPath); },
                onCancel: () => { Modal.destroyAll(); },
            });
            return;
        }

        switch (match.status) {
            case matchStatus.live: {
                Modal.error({
                    title: 'Failed to bet',
                    content: <p className="font-size-16">Can not bet on a match is in progress</p>,
                    centered: true,
                });
                break;
            }
            case matchStatus.past: {
                Modal.error({
                    title: 'Failed to bet',
                    content: <p className="font-size-16">Match has ended</p>,
                    centered: true,
                });
                break;
            }
            default: {
                if (+team.id === +teamUserBet) {
                    Modal.warning({
                        title: 'Warning',
                        content: <p className="font-size-16">You have already chosen {team.name}</p>,
                        centered: true,
                    });
                } else {
                    dispatch(betActions.openModalConfirm(team));
                }
            }
        }
    };

    return (
        <div className="bet-page-content">
            <div className="bet-page-content__basic-info basic-match-info">
                <h1 className="basic-match-info__name">
                    <span className="basic-match-info__name_home">
                        {teamHome.name}
                    </span>
                    <span> VS </span>
                    <span className="basic-match-info__name_away">
                        {teamAway.name}
                    </span>
                </h1>
                <h2 className="basic-match-info__time">
                    <ClockCircleOutlined /> {timeHour}:{timeMinute}
                </h2>
                <h2 className="basic-match-info__time">
                    <CalendarOutlined /> {dateDay} - {monthName} - {dateYear}
                </h2>
            </div>
            <div className="bet-page-content__match">
                <div className="match-bet">
                    <div className="match-bet__league">
                        <i className="match-bet__league-icon">
                            <Image src={match.league.logo} />
                        </i>
                        {match.league.name}
                    </div>
                    <div className="match-bet__content">
                        {/* Header status */}
                        <div className="match-bet__header-item bet-status">
                            {match.status === matchStatus.upComing
                                && (
                                    <div className="bet-countdown">
                                        <span className="bet-countdown__title">
                                            Upcoming Match
                                        </span>
                                        <strong className="bet-countdown__time">
                                            {isMoreThanOneDay && <Countdown value={timeCount} format="D day HH:mm:ss" />}
                                            {!isMoreThanOneDay && <Countdown value={timeCount} format="HH:mm:ss" />}
                                        </strong>
                                    </div>
                                )}
                            {match.status === matchStatus.live
                                && (
                                    <div className="bet-status__match">
                                        <div className="bet-status__match_live">
                                            <PauseCircleOutlined />
                                            <span>Live</span>
                                        </div>
                                    </div>
                                )}
                            {match.status === matchStatus.past
                                && (
                                    <div className="bet-status__match">
                                        <strong className="bet-status__match-title_ended">
                                            Match Ended
                                        </strong>
                                    </div>
                                )}
                        </div>
                        {/* handicap */}
                        <div className="match-bet__header-item bet-handicap">
                            <div className="bet-handicap__score">
                                <span>{handicapScoreTeamHome}</span>
                            </div>
                            <div className="bet-handicap__title">
                                <span>Handicap</span>
                            </div>
                            <div className="bet-handicap__score">
                                <span>{handicapScoreTeamAway}</span>
                            </div>
                        </div>
                        {/* Bet line */}
                        <div className="match-bet__bet-line">
                            {/* Team home */}
                            <div className="bet-team bet-team_home">
                                <div
                                    className="bet-team__people bet-team__people_home"
                                >
                                    <div className="bet-team__button-people bet-team__button-people_home">
                                        <UserOutlined />
                                        <span className="bet-team__people-number">
                                            {peopleNumberBetTeamHome}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="bet-team__container bet-team__container_home"
                                    onClick={() => onChooseTeamHandler(teamHome)}
                                >
                                    <div className="bet-team__logo-container">
                                        <div className="bet-team__logo bet-team__logo_home">
                                            <Image src={teamHome.logo} />
                                        </div>
                                    </div>
                                    <div className="bet-team__score">
                                        <span>{teamHomeScore}</span>
                                    </div>
                                </button>
                            </div>
                            {/* Draw */}
                            <div className="draw">
                                <div className="draw__container">
                                    <div
                                        className="bet-team__people bet-team__people_draw"
                                    >
                                        <div className="bet-team__button-people bet-team__button-people_draw">
                                            <UserOutlined />
                                            <span className="bet-team__people-number">
                                                {peopleNumberBetDraw}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="draw__label" onClick={() => onChooseTeamHandler(drawOption)}>Draw</button>
                                </div>
                            </div>
                            {/* Team away */}
                            <div className="bet-team bet-team_away">
                                <div
                                    className="bet-team__people bet-team__people_away"
                                >
                                    <div className="bet-team__button-people bet-team__button-people_away">
                                        <UserOutlined />
                                        <span className="bet-team__people-number">
                                            {peopleNumberBetTeamAway}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="bet-team__container bet-team__container_away"
                                    onClick={() => onChooseTeamHandler(teamAway)}
                                >
                                    <div className="bet-team__logo-container">
                                        <div className="bet-team__logo bet-team__logo_away">
                                            <Image src={teamAway.logo} />
                                        </div>
                                    </div>
                                    <div className="bet-team__score">
                                        <span>{teamAwayScore}</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* Bet line break */}
                        <div className="match-bet__bet-line-break">
                            <div className="match-bet__bet-line-break-item">
                                <div className={classTeamHomeChoose}>
                                    <button
                                        className="team-choose__container"
                                        onClick={() => onChooseTeamHandler(teamHome)}
                                    >
                                        <div className="team-choose__flex-container team-choose__flex-container_home">
                                            <span>{teamHome.name}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="match-bet__bet-line-break-item">
                                <div className={classDrawChoose}>
                                    <button
                                        className="team-choose__container"
                                        onClick={() => onChooseTeamHandler(drawOption)}
                                    >
                                        <div className="team-choose__flex-container team-choose__flex-container_draw">
                                            <span>Draw</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="match-bet__bet-line-break-item">
                                <div className={classTeamAwayChoose}>
                                    <button
                                        className="team-choose__container"
                                        onClick={() => onChooseTeamHandler(teamAway)}
                                    >
                                        <div className="team-choose__flex-container team-choose__flex-container_away">
                                            <span>{teamAway.name}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="match-bet__footer">
                            <div className="match-bet__bet-action">
                                <div className="match-bet__bet-amount">
                                    <span>{match.betAmount}</span>
                                    <img src={coinImage} alt='coin' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetail;
