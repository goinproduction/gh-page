/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axiosConfig from '../../../utils/config/axios-config';
import { ICheckoutData } from './interfaces/manage-user';

export class ManageUserService {
    public static checkout = (data: ICheckoutData) => {
        const { userId, amount } = data;
        const amountSend = +amount;
        return axiosConfig.post(`api/checkout/recharge/${userId}`, { amount: amountSend });
    };

    public static deleteUser = (userId: string) => {
        return axiosConfig.delete(`api/user/${userId}`);
    };
}
