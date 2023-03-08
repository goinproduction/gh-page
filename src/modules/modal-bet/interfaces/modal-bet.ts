export interface IBetParams {
    teamBet: number;
    matchId: number;
}

export interface IBetResponse {
    data: {
        teamBet: number;
        match: {
            teamBetQuantity: number[];
        }
    }
}
