import React, { useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Login from '@/components/Login/Login.component';

import { pathUri } from '@/modules/define/path';
import { pathApi } from '@/modules/define/api';
import { login } from '@/modules/define/login';
import { fetchLoginFailure, fetchLoginSuccess, fetchYoutubeCheckStart } from '@/store/login/login.actions';
import { RootState } from '@/store/rootReducer';

const LoginContainer = () => {
  const { tokenId } : { tokenId: any } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if(tokenId) history.push(pathUri.main);
  }, [tokenId]);

  const handleGoogleSign = ({ profileObj,tokenId, accessToken }: any) => {
    dispatch(fetchLoginSuccess({ profileObj,tokenId, accessToken }));
    dispatch(fetchYoutubeCheckStart());
  };
  
  const hangleGoogleFail = (res: any) => {
    console.log('google login fail: ', res);
    dispatch(fetchLoginFailure(res));
    if(res.error === login.message.error.idpiframe || res.error === login.message.error.popupClosed) {
      // setGlobalContext({...globalContext, toast: { display: true, message: '쿠키가 차단 되었습니다. 쿠키를 허용해주세요.', type: messageType.info}});
    }
  }

  const { signIn } = useGoogleLogin({
    clientId: process.env.REACT_APP_OAUTH_CLINENT_ID!,
    onSuccess: handleGoogleSign,
    onFailure: hangleGoogleFail,
    redirectUri: `${window.location.href}`,
    responseType: "token",
    scope: `${pathApi.youtube.scope}`,
  });

  return (
    <Login onGoogle={signIn}/>
  );
};

export default LoginContainer;