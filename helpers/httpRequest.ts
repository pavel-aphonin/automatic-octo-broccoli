import getConfig from 'next/config';
import axios from 'axios';
// import userService from '../services/user.service';

const { publicRuntimeConfig } = getConfig();

const get = async (url: string, params: any = null) => {
  const method = 'GET';
  const headers = authHeader(url);

  console.log({ headers })

  const response = await axios({
    url,
    method,
    headers,
    params,
  });

  return response.data;
}

const post = async (url: string, data: Object) => {
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json', ...authHeader(url) };

  console.log('POST: ', { headers })

  const response = await axios({
    url,
    method,
    headers,
    data,
  });

  return response.data;
}

function authHeader(url: string): { Authorization?: string } {
  // const user = userService.userValue;
  // const isLoggedIn = user;
  // const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  // if (isLoggedIn && isApiUrl) {
  const token = 'NWhZQzlNS25hMUpCUXljRnd1';
  return { Authorization: `PrivateToken ${token}` };

  // return { Authorization: `Bearer ${token}` };
  // } else {
  //   return {};
  // }
}

export const httpRequest = {
  get,
  post,
}