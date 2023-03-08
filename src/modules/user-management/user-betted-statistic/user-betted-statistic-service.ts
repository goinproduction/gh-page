import axiosConfig from '../../../utils/config/axios-config';
import { matchStatus } from '../../../utils/constants/match-status';
import { IUserBettedStatisticParams } from './interfaces/user-betted-statistic';

export const getUserBettedStatistic = (pageParams: IUserBettedStatisticParams) => {
    const url = 'api/bet/history';
    const params = { matchStatus: matchStatus.past, page: pageParams.page, limit: pageParams.limit };
    return axiosConfig.get(url, { params });
};
