import { BehaviorSubject } from 'rxjs';
import { httpRequest } from '../helpers/httpRequest';
import { BASE_URL } from './../config';

const userSubject = new BehaviorSubject(process.browser && localStorage.getItem('token'));

const userValue = userSubject.value;

const login = async (login: string, password: string) => {

  const { token } = await httpRequest.post(`${BASE_URL}/api/auth`, { login, password });
  userSubject.next(token);
  localStorage.setItem('token', token);
  return token;
}

const logout = () => {
  localStorage.removeItem('token');
  userSubject.next(null);
}

const isAuth = () => {
  return localStorage.getItem('token') !== null;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userValue,
  login,
  logout,
  isAuth,
};
