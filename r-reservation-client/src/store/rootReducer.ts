import { combineReducers } from 'redux';

import memberReducer from './member/member.reducer';
import LoginReducer from './login/login.reducer';

const rootReducer = combineReducers({
  member: memberReducer,
  user: LoginReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;