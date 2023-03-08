import axiosConfig from '../../utils/config/axios-config';
import { IAddLeagueField } from './modals/interface/manage-league';

export class ManageLeagueService {
    public static addLeague = (league: IAddLeagueField) => {
        const formData = new FormData();
        const formArray: [string, string | File][] = Object.entries({ ...league });
        formArray.forEach(([key, value]) => {
            formData.append(key, value);
        });
        return axiosConfig.post('api/league', formData);
    };

    public static editLeague = (league: IAddLeagueField, id: string) => {
        const formData = new FormData();
        const formArray: [string, string | File][] = Object.entries({ ...league });
        formArray.forEach(([key, value]) => {
            formData.append(key, value);
        });
        return axiosConfig.put(`api/league/${id}`, formData);
    };

    public static deleteLeague = (leagueId: string) => {
        return axiosConfig.delete(`api/league/${leagueId}`);
    };
}
