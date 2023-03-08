/* eslint-disable @typescript-eslint/no-unused-vars */
import axiosConfig from '../../../utils/config/axios-config';

export const getMatchDetail = (matchId: string) => {
    const url = `api/match/${matchId}`;
    return axiosConfig.get(url);
};
