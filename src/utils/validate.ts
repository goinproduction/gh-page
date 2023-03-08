import { MAX_FILE_SIZE } from './constants/file-size';
import * as regex from './constants/regex';
import { IFileUpload } from './interfaces';

export const isValidPassword = (password : string) => {
    const pattern = regex.checkPasswordRegex;
    return pattern.test(password);
};
export const isValidUsername = (username : string) => {
    const pattern = regex.checkUsernameRegex;
    return pattern.test(username);
};
export const isValidPhoneNumber = (phone : string) => {
    const pattern = regex.checkPhoneNumberRegex;
    return pattern.test(phone);
};
export const isValidEmail = (email: string) => {
    const pattern = regex.checkEmailRegex;
    return pattern.test(email);
};
export const isValidFile = (uploadedFile: IFileUpload) => {
    const { type } = uploadedFile.file;
    const validFile = type === 'image/png' || type === 'image/jpeg' || type === 'image/jpg';
    if (validFile) {
        return true;
    }
    return false;
};
export const isValidFileSize = (uploadedFile: IFileUpload) => {
    const validSize = uploadedFile.file.size < MAX_FILE_SIZE;
    if (validSize) {
        return true;
    }
    return false;
};
export const isValidUrl = (url: string) => {
    const pattern = regex.checkUrlRegex;
    return pattern.test(url);
};
