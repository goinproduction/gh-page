import axiosConfig from '../../../utils/config/axios-config';
import { IFilterMatchParams } from './interfaces/match-list';

export const getMatchList = (params: IFilterMatchParams) => {
    const url = 'api/match';
    return axiosConfig.get(url, { params });
};
