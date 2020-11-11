import { all, call } from 'redux-saga/effects';

import { memberSagas } from './member/member.sagas';
import { loginSagas } from './login/login.sagas';
import { scheduleSagas } from './schedule/schedule.sagas';

export default function* rootSaga() {
  yield all([memberSagas(), loginSagas(), scheduleSagas()]);
}