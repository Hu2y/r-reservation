import { combineReducers } from 'redux';

import memberReducer from './member/member.reducer';
import LoginReducer from './login/login.reducer';
import ScheduleReducer from './schedule/schedule.reducer';

const rootReducer = combineReducers({
  member: memberReducer,
  user: LoginReducer,
  schedule: ScheduleReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;