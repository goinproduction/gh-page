export interface IPlayer {
    id: number,
    name: string,
    playerNumber: number,
    avatar: string,
    position: string,
}
export interface IAddTeamField {
    name: string,
    logo: File,
    isNational: string,
    leagueId: string,
}
export interface IEditTeamField {
    name: string,
    logo: File,
    isNational: string,
    leagueIds: string[],
}
export interface IAddTeamResponse {
    data: {
        name: string,
        logo: string,
        isNational: string,
        players: IPlayer[],
        id: number
    }
}
export interface IEditTeamArgument {
    id: string,
    name: string,
    logo: File,
    isNational: string,
}
