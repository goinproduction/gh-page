import { ILeagueItem } from '../../modules/league-list/interfaces/league-list';
import { IMatchInfo } from '../../modules/match-management/match-list/interfaces/match-list';
import { ITeamItem } from '../../modules/team-management/team-list/interfaces/team-list';

export const defaultSelectedTeam: ITeamItem = {
    id: 0,
    name: '',
    logo: '',
};
export const defaultSelectedLeague: ILeagueItem = {
    id: '',
    name: '',
    logo: '',
    background: '',
    countryName: '',
};
export const defaultSelectedMatch: IMatchInfo = {
    id: '',
    startTime: new Date(),
    handicap: 0,
    betAmount: 0,
    status: 0,
    scoreTeamHome: 0,
    scoreTeamAway: 0,
    league: {
        id: '',
        logo: '',
        name: '',
    },
    homeTeam: {
        id: '',
        name: '',
        logo: '',
        isNational: false,
    },
    awayTeam: {
        id: '',
        name: '',
        logo: '',
        isNational: false,
    },
    isPulished: true,
};
export const defaultDate = {
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
};
