import axiosConfig from '../../../utils/config/axios-config';
import { IRegisterField, ILoginField } from '../interfaces/authentication';

export const registerAPI = (data: IRegisterField) => {
    const { email, password, username, fullName, phoneNumber } = data;
    return axiosConfig.post('auth/register', { email, password, username, fullName, phoneNumber });
};
export const loginAPI = (data: ILoginField) => {
    return axiosConfig.post('auth/login', data);
};
export const decodeToken = () => {
    return axiosConfig.get('auth/decode');
};
