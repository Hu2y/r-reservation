import LoginActionTypes from './login.types';
import { LoginAction } from './login.actions';

const INITIAL_STATE = {
  user: [],
  tokenId: '',
  isFetching: false,
  errorMessage: undefined,
};

const LoginReducer = (state = INITIAL_STATE, action: LoginAction) => {
  switch (action.type) {
    case LoginActionTypes.FETCH_LOGIN_START:
      return {
        ...state,
        isFetching: true,
      };
    case LoginActionTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload.profileObj,
        tokenId: action.payload.tokenId 
      };
    case LoginActionTypes.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  };
};

export default LoginReducer;
