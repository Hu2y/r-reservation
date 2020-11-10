import React from 'react';

const Login = ({ onGoogle }: any) => {
  return (
    <div>
      <button onClick={onGoogle}>로그인</button>
    </div>
  );
};

export default Login;