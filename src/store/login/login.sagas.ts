import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import LoginActionTypes from './login.types';
import { fetchLoginSuccess, fetchLoginFailure, fetchYoutubeCheckSuccess, fetchYoutubeCheckFailure } from './login.actions';

export function* fetchLogin() {
  
  // 서버 만들어지면 API 연동
  try {
    const {
      data: { returnData }
    } = yield axios.get(`${process.env.SERVER}`);
    yield put(fetchLoginSuccess( returnData ));
  } catch (error) {
    yield put(fetchLoginFailure(error.message));
  }
}

export function* fetchYoutube() {
  const { user: { accessToken }} = yield select();
  try {
    const { data } = yield axios.get(`${process.env.REACT_APP_GOOGLE_VALIDATE_TOKEN}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    yield put(fetchYoutubeCheckSuccess(data));
  } catch (error) {
    yield put(fetchYoutubeCheckFailure(error.message));
  }
}

export function* fetchLoginStart() {
  yield takeLatest(LoginActionTypes.FETCH_LOGIN_START, fetchLogin);
}

export function* fetchYoutubeCheckStart() {
  yield takeLatest(LoginActionTypes.FETCH_YOUTUBE_CHECK_START, fetchYoutube);
}

export function* loginSagas() {
  yield all([call(fetchLoginStart), call(fetchYoutubeCheckStart)]);
}
