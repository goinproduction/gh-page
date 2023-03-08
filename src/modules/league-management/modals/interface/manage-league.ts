export interface IAddLeagueField {
    name: string;
    logo: File;
    background: File;
}
export interface IEditLeagueField {
    name: string;
    logo: File,
    background: string;
    countryName: string;
    teams: number[];
}
