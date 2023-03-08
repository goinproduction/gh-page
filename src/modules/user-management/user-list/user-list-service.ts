/* eslint-disable @typescript-eslint/no-unused-vars */

import axiosConfig from '../../../utils/config/axios-config';
import { IGetUserListParams } from './interface/user-list';

export const getUserList = (params: IGetUserListParams) => {
    const url = 'api/user';
    return axiosConfig.get(url, { params });
};
