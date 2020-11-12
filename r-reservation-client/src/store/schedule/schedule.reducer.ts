import ScheduleActionTypes from './schedule.types';
import { ScheduleAction } from './schedule.action';

const INITIAL_STATE = {
  schedule: [],
  isFetching: false,
  errorMessage: '',
  layerSchedule: []
};

const ScheduleReducer = (state = INITIAL_STATE, action: ScheduleAction) => {
  switch (action.type) {
    case ScheduleActionTypes.FETCH_SCHEDULE_START:
      return {
        ...state,
        isFetching: true
      };
    case ScheduleActionTypes.FETCH_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.payload,
        isFetching: false
      };
    case ScheduleActionTypes.FETCH_SCHEDULE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      };
    case ScheduleActionTypes.GET_LAYER_SCHEDULE:
      return {
        ...state,
        layerSchedule: action.payload
      }
    default:
      return state;
  };
};

export default ScheduleReducer;