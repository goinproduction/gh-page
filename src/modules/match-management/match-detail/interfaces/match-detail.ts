import { ILeagueMatch, ITeamMatch } from '../../match-list/interfaces/match-list';

export interface IMatchDetail {
    data: {
        match: {
            id: string;
            startTime: string;
            handicap: number;
            betAmount: number;
            status: number;
            scoreTeamHome: number;
            scoreTeamAway: number;
            totalBetQuantity: number;
            teamBetQuantity: number[];
            homeTeam: ITeamMatch;
            awayTeam: ITeamMatch;
            league: ILeagueMatch;
        };
        teamUserBet: string | undefined;
        userBettedStatus: number | undefined;
    }
}
