export interface ILeagueItem {
    id: string;
    name: string;
    logo: string;
    background: string;
    countryName: string;
}

export interface ILeagueListResponse {
    data: Array<ILeagueItem>;
}
