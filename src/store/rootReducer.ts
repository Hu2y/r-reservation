import { combineReducers } from 'redux';

import memberReducer from './member/member.reducer';

const rootReducer = combineReducers({
  member: memberReducer,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;