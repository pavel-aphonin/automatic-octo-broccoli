import getConfig from 'next/config';
import axios from 'axios';
import userService from '../services/user.service';

const { publicRuntimeConfig } = getConfig();

const get = async (url: string) => {
  const method = 'GET';
  const headers = authHeader(url);

  const response = await axios({
    url,
    method,
    headers,
  });

  return response.data;
}

const post = async (url: string, data: Object) => {
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json', ...authHeader(url) };

  const response = await axios({
    url,
    method,
    headers,
    data,
  });

  return response.data;
}

function authHeader(url: string): { Authorization?: string } {
  const user = userService.userValue;
  const isLoggedIn = user;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user}` };
  } else {
    return {};
  }
}

export const httpRequest = {
  get,
  post,
}