import LoginActionTypes from './login.types';
import { LoginAction } from './login.actions';

const INITIAL_STATE = {
  user: [],
  youtube: [],
  tokenId: '',
  accessToken: '',
  isFetching: false,
  loginErrorMessage: undefined,
  youtubeErrorMessage: undefined,
  
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
        tokenId: action.payload.tokenId,
        accessToken: action.payload.accessToken
      };
    case LoginActionTypes.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        loginErrorMessage: action.payload
      };
    case LoginActionTypes.FETCH_YOUTUBE_CHECK_START:
      return {
        ...state,
        isFetching: true,
      }
    case LoginActionTypes.FETCH_YOUTUBE_CHECK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        youtube: action.payload
      }
    case LoginActionTypes.FETCH_YOUTUBE_CHECK_FAILURE:
      return {
        ...state,
        isFetching: false,
        youtubeErrorMessage: action.payload
      }
    default:
      return state;
  };
};

export default LoginReducer;
