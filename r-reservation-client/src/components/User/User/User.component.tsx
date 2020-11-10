import React from 'react';

import IOAuth from '@/@types/OAuth';

import { UserWrap, ImgWrap, Img, UserInfoWrap, Team, Name, Email } from './User.styles';

const User = ({ userInfo: { name, email, imageUrl }, userTeam}: any) => {
  
  return (
    <UserWrap>
      <ImgWrap>
        <Img src={imageUrl} alt=""/>
      </ImgWrap>
      <UserInfoWrap>
        <Name>{name}</Name>
        <Team>{userTeam}</Team>
        <Email>{email}</Email>
      </UserInfoWrap>
    </UserWrap>
  );
};

export default User;