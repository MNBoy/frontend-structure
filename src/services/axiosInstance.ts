import { Tools } from '@/common/utils';
import axios from 'axios';

// Interfaces
interface IParams {
  url: string;
  method: 'POST' | 'DELETE' | 'PUT' | 'GET';
  body?: any;
  headers?: any;
}

interface IOutPut {
  error: string | null;
  data: any;
  meta?: any;
}

const getContentType = (headers: any) => {
  if (headers) {
    if (headers['Content-Type']) {
      return headers['Content-Type'];
    }
  }
  return 'application/json';
};

const axiosInstance = () => {
  const BaseApiUrl = process.env.NEXT_PUBLIC_API_END_POINT;

  return async ({ url, method, body = null, headers = null }: IParams) => {
    let output: IOutPut = { error: null, data: null, meta: null };
    const userCredentials = Tools.getUserCredentials();

    try {
      const response = await axios({
        url: `${BaseApiUrl}${url}`,
        method: method,
        data: body,
        headers: {
          ...headers,
          'Content-Type': getContentType(headers),
          ...(userCredentials && {
            Authorization: `Bearer ${userCredentials.token}`,
          }),
        },
      });

      return (output = {
        error: null,
        data: response.data,
      });
    } catch (error: any) {
      if (error.response) {
        return (output = {
          error: error.response.data.message || 'Something went wrong!',
          meta:
            {
              errorFields: error.response.data.errorFields,
            } || null,
          data: null,
        });
      }
      return (output = {
        error: error.message,
        data: null,
      });
    }
  };
};

export default axiosInstance;
