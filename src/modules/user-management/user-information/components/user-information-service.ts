import axiosConfig from '../../../../utils/config/axios-config';
import { IEditUserInfoField, IUpdateUserPasswordField } from '../interfaces/user-information';

export class UserInformationService {
    public static updateUserInfo = (userInfo: IEditUserInfoField, userId: number) => {
        const { fullName, phoneNumber } = userInfo;
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('phoneNumber', phoneNumber);
        return axiosConfig.put(`api/user/${userId}`, formData);
    };

    public static updateUserAvatar = (avatar: File, userId: number) => {
        const formData = new FormData();
        formData.append('avatar', avatar);
        return axiosConfig.put(`api/user/${userId}`, formData);
    };

    public static updateUserPassword = (userPassword: IUpdateUserPasswordField) => {
        const { newPassword, oldPassword } = userPassword;
        return axiosConfig.post('auth/changepwd', { newPassword, oldPassword });
    };
}
