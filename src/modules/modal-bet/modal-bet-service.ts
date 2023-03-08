import axiosConfig from '../../utils/config/axios-config';
import { IBetParams } from './interfaces/modal-bet';

export const betTeam = (params: IBetParams) => {
    return axiosConfig.post('api/bet', { ...params });
};
