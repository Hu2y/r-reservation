import MemberActionTypes from './member.types';
import { MemberAction } from './member.actions';

const INITIAL_STATE = {
  members: [],
  isFetching: false,
  errorMessage: undefined,
  onceFetching: false,
};

const memberReducer = (state = INITIAL_STATE, action: MemberAction) => {
  switch (action.type) {
    case MemberActionTypes.FETCH_MEMBER_START:
      return {
        ...state,
        isFetching: true,
      };
    case MemberActionTypes.FETCH_MEMBER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        members: action.payload,
        onceFetching: true,
      };
    case MemberActionTypes.FETCH_MEMBER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  };
};

export default memberReducer;
