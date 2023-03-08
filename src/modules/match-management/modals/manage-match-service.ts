/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axiosConfig from '../../../utils/config/axios-config';
import { IAddMatchField, IEditMatchArgument, IEditMatchScoreArgument } from './interface/manage-match';

const getTeamId = (name: string) => {
    return +name.slice(0, name.indexOf('-'));
};
export class MatchService {
    public static addMatch = (matchInfo: IAddMatchField) => {
        const { leagueId, teams, betAmount, startTime, hasHandicap, awayTeamHandicap, homeTeamHandicap } = matchInfo;
        let handicap = 0;
        if (hasHandicap) {
            handicap = (awayTeamHandicap as number) - (homeTeamHandicap as number);
        }
        const teamIds = [getTeamId(teams[0]), getTeamId(teams[1])];
        const data = {
            leagueId,
            teamIds,
            betAmount,
            startTime,
            handicap,
        };
        return axiosConfig.post('api/match', data);
    };

    public static deleteMatch = (matchId: string) => {
        return axiosConfig.delete(`api/match/${matchId}`);
    };

    public static editMatch = (matchInfo: IEditMatchArgument, matchId: string) => {
        const { homeTeamHandicap, awayTeamHandicap, startTime, betAmount, teams } = matchInfo;
        const teamIds = [getTeamId(teams[0]), getTeamId(teams[1])];
        let handicap = 0;
        if (homeTeamHandicap as number >= 0 && awayTeamHandicap as number >= 0) {
            handicap = (awayTeamHandicap as number) - (homeTeamHandicap as number);
        }
        return axiosConfig.put(`api/match/${matchId}`, { betAmount, startTime, handicap, teamIds });
    };

    public static editMatchScore = (matchInfo: IEditMatchScoreArgument, matchId: string) => {
        return axiosConfig.put(`api/match/${matchId}`, matchInfo);
    };
}
