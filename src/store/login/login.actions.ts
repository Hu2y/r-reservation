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

export const fetchYoutubeCheckStart = () => ({
  type: LoginActionTypes.FETCH_YOUTUBE_CHECK_START,
  payload: null
});

export const fetchYoutubeCheckSuccess = (user: any) => ({
  type: LoginActionTypes.FETCH_YOUTUBE_CHECK_SUCCESS,
  payload: user
});

export const fetchYoutubeCheckFailure = (errorMessage: string) => ({
  type: LoginActionTypes.FETCH_YOUTUBE_CHECK_FAILURE,
  payload: errorMessage
});

export type LoginAction =
  | ReturnType<typeof fetchLoginStart>
  | ReturnType<typeof fetchLoginSuccess>
  | ReturnType<typeof fetchLoginFailure>
  | ReturnType<typeof fetchYoutubeCheckStart>
  | ReturnType<typeof fetchYoutubeCheckSuccess>
  | ReturnType<typeof fetchYoutubeCheckFailure>

