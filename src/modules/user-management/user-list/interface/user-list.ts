export interface IUserItem {
    id: number;
    email: string;
    fullName: string;
    phoneNumber: string;
    avatar: string;
    win: number;
    lose: number;
    winRate: number;
    debt: number;
    isActive: boolean;
}

export interface IResponseUserList {
    data: {
        data: Array<IUserItem>;
        page: {
            total: number;
        };
    }
}

export interface IGetUserListParams {
    page: string | null;
    limit: number;
    query: string | null;
}
