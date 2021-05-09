import axios from 'axios';
import {mockData} from '../redux/mockReduxStore';
import * as interceptors from './Interceptors.tsx';



axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10000;
axios.interceptors.request.use(
  interceptors.requestInterceptor,
  interceptors.requestErrorInterceptor
);

axios.interceptors.response.use(
    interceptors.responseInterceptor,
    interceptors.responseErrorInterceptor
  );


  export const startFetch = async (config) => {
    try {
      const res = await axios(config);
     
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  };



  export default async function Api(path, params, method, token) {
  
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: await getToken(),
        }),
      },
      method,
      ...(params && {
        data: JSON.stringify(params),
      }),
    };

    return mockData;
   /* return startFetch({ url: path, ...options });  On Api Integration this can be uncommented */
  }