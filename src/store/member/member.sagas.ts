import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import { makePartsMap } from '../../utils/utils';

import MemberActionTypes from './member.types';
import { fetchMemberSuccess, fetchMemberFailure} from './member.actions';

export function* fetchMember() {
  try {
    const {
      data: { returnData }
    } = yield axios.get(`${process.env.SERVER}`);
    const makePartData = makePartsMap(returnData);
    yield put(fetchMemberSuccess(makePartData));
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
