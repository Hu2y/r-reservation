import { all, call } from 'redux-saga/effects';

import { memberSagas } from './member/member.sagas';

export default function* rootSata() {
  yield all([memberSagas()]);
}