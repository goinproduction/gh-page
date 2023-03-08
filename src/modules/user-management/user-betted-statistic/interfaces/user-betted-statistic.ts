import { ITeamMatch } from '../../../match-management/match-list/interfaces/match-list';

export interface IMatchStatisticItem {
    id: string;
    userBettedStatus: number;
    betTime: string;
    match: {
        id: string;
        betAmount: number;
        handicap: number;
        league: {
            id: string;
            name: string;
            logo: string;
            background: string;
        };
        scoreTeamAway: 0;
        scoreTeamHome: 0;
        startTime: string;
        status: number;
        homeTeam: ITeamMatch;
        awayTeam: ITeamMatch;
    };
    teamBet: string;
}

export interface IUserBettedStatisticResponse {
    data: {
        bets: {
            data: Array<IMatchStatisticItem>,
            page: {
                total: number
            }
        };
        user: {
            win: number;
            lose: number;
            winRate: number;
            debt: number;
        }
    }
}

export interface IUserBettedStatisticParams {
    page: string | null;
    limit: number;
}
