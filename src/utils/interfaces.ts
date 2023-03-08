import { IUserInfo } from '../modules/authentication/interfaces/authentication';

export interface IErrorResponse {
  message: string,
}
export interface IDecodeResponse {
  data: {
    user: IUserInfo,
  }
}
export interface IDateSpecific {
  dateDay: string;
  dateMonth: string;
  dateYear: string;
  timeHour: string;
  timeMinute: string;
  timeSecond: string;
  timeCount: number;
  monthName: string;
  formattedDate: string,
  time: string,
}
export interface IFileUpload {
  file: File
}
