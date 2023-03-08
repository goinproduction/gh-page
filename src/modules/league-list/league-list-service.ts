import axiosConfig from '../../utils/config/axios-config';

export const getLeagueList = () => {
  const url = 'api/league';
  return axiosConfig.get(url);
};
