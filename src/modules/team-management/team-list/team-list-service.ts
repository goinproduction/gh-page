import axiosConfig from '../../../utils/config/axios-config';
import { IGetTeamListParams } from './interfaces/team-list';

export const getTeamList = (params: IGetTeamListParams) => {
    const url = 'api/team';
    return axiosConfig.get(url, { params });
};
