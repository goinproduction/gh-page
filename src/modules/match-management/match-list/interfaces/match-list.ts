export interface ILeagueMatch {
    id: string;
    name: string;
    logo: string;
}

export interface ITeamMatch {
    id: string;
    name: string;
    logo: string;
    isNational?: boolean,
}
export interface IMatchInfo {
    id: string;
    startTime: Date;
    handicap: number;
    betAmount: number;
    status: number;
    scoreTeamHome: number;
    scoreTeamAway: number;
    totalBetQuantity?: number;
    teamBetQuantity?: number[];
    homeTeam: ITeamMatch;
    awayTeam: ITeamMatch;
    league: ILeagueMatch;
    isPulished: boolean;
}
export interface IMatchItem {
    match: IMatchInfo;
    userBettedStatus: number;
}
export interface IResponseMatchList {
    data: {
        data: Array<IMatchItem>;
        page: {
            total: number;
        };
    }
}

export interface IFilterMatchParams {
    page: string | null;
    matchStatus: string | null;
    filterLeague: string | null;
    keyword: string | null;
    limit: number;
}
