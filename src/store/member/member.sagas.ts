import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import MemberActionTypes from './member.types';
import { fetchMemberSuccess, fetchMemberFailure} from './member.actions';

import axios from 'axios';

export function* fetchMember() {
  try {
    const {
      data: { returnData }
    } = yield axios.get(`${process.env.SERVER}`);
    yield put(fetchMemberSuccess(returnData));
  } catch (error) {
    yield put(fetchMemberFailure(error.message));
  }
}

export function* fetchMemberStart() {
  yield takeLatest(MemberActionTypes.FETCH_MEMBER_START, fetchMember);
}

export function* memberSagas() {
  yield all([call(fetchMemberStart)]);
}
