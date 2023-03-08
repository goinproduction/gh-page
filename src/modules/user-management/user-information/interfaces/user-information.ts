export interface IEditUserInfoField {
    fullName: string;
    phoneNumber: string;
}
export interface IUpdateUserPasswordField {
    oldPassword: string;
    newPassword: string;
}
export interface IUpdateUserPasswordResponse {
    message: string;
}
