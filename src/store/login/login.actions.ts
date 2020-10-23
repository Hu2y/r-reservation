import LoginActionTypes from './login.types';
import IOAuth from '@/@types/OAuth';

export const fetchLoginStart = () => ({
  type: LoginActionTypes.FETCH_LOGIN_START,
  payload: null
});

export const fetchLoginSuccess = (user: any) => ({
  type: LoginActionTypes.FETCH_LOGIN_SUCCESS,
  payload: user
});

export const fetchLoginFailure = (errorMessage: string) => ({
  type: LoginActionTypes.FETCH_LOGIN_FAILURE,
  payload: errorMessage
});


export type LoginAction =
  | ReturnType<typeof fetchLoginStart>
  | ReturnType<typeof fetchLoginSuccess>
  | ReturnType<typeof fetchLoginFailure>;
