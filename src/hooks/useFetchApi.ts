import { message } from 'antd';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { IErrorResponse } from '../utils/interfaces';

const useFetchApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line consistent-return
    const fetchApi = async (func : Promise<AxiosResponse>) => {
        setIsLoading(true);
        try {
            const response = await func;
            setIsLoading(false);
            return response;
        } catch (error) {
            setIsLoading(false);
            message.error((error as IErrorResponse).message);
        }
    };
    return { fetchApi, isLoading };
};

export default useFetchApi;
