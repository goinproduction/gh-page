export interface IUserInfo {
    id: number,
    username: string,
    email: string,
    fullName: string,
    phoneNumber: number,
    avatar: string,
    role: string,
    win: number,
    lose: number,
    winRate: number,
    debt: number,
    isActive: boolean,
    createAt?: Date,
}
export interface ILoginField {
    username: string,
    password: string
}
export interface IUserDataResponse {
    data: {
        accessToken: string,
        user: IUserInfo,
    }
}
export interface IRegisterField {
    username: string,
    email: string,
    fullName: string,
    phoneNumber: number,
    password: string
}
export interface IRegisterResponse {
    // TODO rename to message when backend change response
    message: string
}
