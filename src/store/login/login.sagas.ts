import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import LoginActionTypes from './login.types';
import { fetchLoginSuccess, fetchLoginFailure } from './login.actions';

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

export function* fetchLoginStart()                        {
  yield takeLatest(LoginActionTypes.FETCH_LOGIN_START, fetchLogin);
}

export function* loginSagas() {
  yield all([call(fetchLoginStart)]);
}
