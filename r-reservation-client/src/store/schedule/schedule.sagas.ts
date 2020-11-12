import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import ScheduleActionTypes from './schedule.types';
import { fetchScheduleSuccess, fetchScheduleFailure } from './schedule.action';

export function* fetchSchedule() {
  try {
    const { data } = yield axios.get(`${process.env.RESERVATION_SERVER}/schedule`);
    yield put(fetchScheduleSuccess(data));
  } catch (error) {
    yield put(fetchScheduleFailure(error))
  }
};

export function* fetchScheduleStart() {
  yield takeLatest(ScheduleActionTypes.FETCH_SCHEDULE_START, fetchSchedule);
};

export function* scheduleSagas() {
  yield all([call(fetchScheduleStart)]);
};