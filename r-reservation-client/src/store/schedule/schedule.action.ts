import ScheduleActionTypes from './schedule.types';

export const fetchScheduleStart = () => ({
  type: ScheduleActionTypes.FETCH_SCHEDULE_START,
  payload: null
});

export const fetchScheduleSuccess = (reservationInfo: any) => ({
  type: ScheduleActionTypes.FETCH_SCHEDULE_SUCCESS,
  payload: reservationInfo
});

export const fetchScheduleFailure = (errorMessage: string) => ({
  type: ScheduleActionTypes.FETCH_SCHEDULE_FAILURE,
  payload: errorMessage
});

export const getLayerSchedule = (layer: any) => ({
  type: ScheduleActionTypes.GET_LAYER_SCHEDULE,
  payload: layer
});

export type ScheduleAction =
  | ReturnType<typeof fetchScheduleStart>
  | ReturnType<typeof fetchScheduleSuccess>
  | ReturnType<typeof fetchScheduleFailure>
  | ReturnType<typeof getLayerSchedule>