/* eslint-disable @typescript-eslint/ban-ts-comment */
import axiosConfig from '../../../utils/config/axios-config';
import { IAddTeamField, IEditTeamArgument } from './interface/manage-team';

export class ManageTeamService {
    public static addTeam = (data : IAddTeamField) => {
        const formData = new FormData();
        const formArray: [string, string | File][] = Object.entries({ ...data });
        formArray.forEach(([key, value]) => {
            formData.append(key, value);
        });
        return axiosConfig.post('api/team', formData);
    };

    public static editTeam = (data : IEditTeamArgument, leagueIds: string[]) => {
        const formData = new FormData();
        const formArray: [string, string | File][] = Object.entries({ ...data });
        formArray.forEach(([key, value]) => {
            formData.append(key, value);
        });
        leagueIds.forEach((id : string) => {
            formData.append('leagueIds', id);
        });
        return axiosConfig.put(`api/team/${data.id}`, formData);
    };

    public static deleteTeam = (teamId: string) => {
        return axiosConfig.delete(`api/team/${teamId}`);
    };
}
