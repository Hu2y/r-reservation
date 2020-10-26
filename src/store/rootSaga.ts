import { all, call } from 'redux-saga/effects';

import { memberSagas } from './member/member.sagas';
import { loginSagas } from './login/login.sagas';

export default function* rootSaga() {
  yield all([memberSagas(), loginSagas()]);
}