import { ILeagueItem } from '../../../league-list/interfaces/league-list';

export interface ITeamItem {
    id: number;
    name: string;
    logo: string;
    leagues?: Array<ILeagueItem>;
    isNational?: boolean;
}

export interface IResponseTeamList {
    data: {
        data: Array<ITeamItem>;
        page: {
            total: number
        }
    }
}

export interface IGetTeamListParams {
    page?: string | null;
    limit?: string;
    leagueId?: string | null;
}
