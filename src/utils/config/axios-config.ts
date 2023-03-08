/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';
import { getAccessToken } from '../token-config';

const axiosConfig = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'content-type': 'application/json',
	},
});
axiosConfig.interceptors.request.use(async (config) => {
	if (getAccessToken()) {
		config.headers!.token = `Bearer ${getAccessToken() as string}`;
	}
	return config;
});
axiosConfig.interceptors.response.use(async (response) => {
	if (response && response.data) {
		return response.data;
	}
	return response;
}, (error) => {
	if (error.response) {
		throw (error.response.data);
	}
	throw (error);
});
export default axiosConfig;
