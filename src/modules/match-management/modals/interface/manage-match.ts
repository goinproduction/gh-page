export interface IPlayer {
    id: number;
    name: string;
    playerNumber: number;
    avatar: string;
    position: string;
}
export interface IAddMatchField {
    teams: [string, string];
    leagueId: number;
    startTime: Date;
    betAmount: number;
    hasHandicap: boolean;
    homeTeamHandicap?: number;
    awayTeamHandicap?: number;
}
export interface IAddMatchResponse{
    message: string;
}

export interface IEditMatchArgument {
    startTime: Date;
    betAmount: number;
    hasHandicap: boolean;
    homeTeamHandicap?: number;
    awayTeamHandicap?: number;
    teams: [string, string];
}
export interface IEditMatchScoreArgument {
    score: [number, number];
}
