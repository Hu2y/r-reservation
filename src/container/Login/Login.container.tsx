import React, { useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Login from '@/components/Login/Login.component';

import { pathUri } from '@/modules/define/path';
import { fetchLoginSuccess } from '@/store/login/login.actions';
import { RootState } from '@/store/rootReducer';

const LoginContainer = () => {
  const { tokenId } : { tokenId: any } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    if(tokenId) history.push(pathUri.main);
  }, [tokenId])
 
  const handleGoogleSign = ({profileObj, tokenId}: any) => {
    // console.log(profileObj, tokenId);
    dispatch(fetchLoginSuccess({profileObj,tokenId}))

    // handleSignApi(tokenId, handleSignSuccess, (error) => {
  
    //   // 가입된 사용자 정보가 없음
    //   if(error.data.code === '0101') {
    //     alert('가입된 사용자 정보가 없습니다. ')
    //   }
    // });
  };
  
  const hangleGoogleFail = (res: any) => {
    console.log('google login fail: ', res);
  
    if(res.error === 'idpiframe_initialization_failed' || res.error === 'popup_closed_by_user') {
      // setGlobalContext({...globalContext, toast: { display: true, message: '쿠키가 차단 되었습니다. 쿠키를 허용해주세요.', type: messageType.info}});
    }
  }
  
  // const handleSignApi = (tokenId, callback = undefined, errorCallback = undefined) => {
  //   console.log("token_id", tokenId)
  //   requestSignGoogle({
  //     token: tokenId,
  //   }).then(response => {
  //     callback && callback(response);
  //   }).catch(error => {
  //     console.log(`sign api error: `, error);
  //     errorCallback && errorCallback(error);
  //   });
  // }
  
  // const handleSignSuccess = result => {
  //   console.log(`login success: `, result);
  
  //   const { authToken, refreshToken } = result;
  //   console.log("authToken", authToken)
    
  //   sessionStorage.set("AUTH_TOKEN", authToken);
  
  //   requestUserInfo(authToken)
  //   .then(response => {
  //     console.log(`user info success: `, response);
  //     const _newUserInfo = { ...globalContext.user, ...response, authToken: authToken, refreshToken: refreshToken };
  
  //     setGlobalContext({...globalContext, user: _newUserInfo});
  
  //   }).catch(error => {
  //     console.log(`user info error: `, error);
  //   });
  // };

  const { signIn } = useGoogleLogin({
    clientId: process.env.REACT_APP_OAUTH_CLINENT_ID!,
    onSuccess: handleGoogleSign,
    onFailure: hangleGoogleFail,
  })

  return (
    <Login onGoogle={signIn}/>
  );
};

export default LoginContainer;