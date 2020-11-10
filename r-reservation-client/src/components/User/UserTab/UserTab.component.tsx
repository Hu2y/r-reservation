import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import User from '@/components/User/User/User.component';

import { RootState } from '@/store/rootReducer';
import IOAuth from '@/@types/OAuth';

import { searchUserTeam } from '@/utils/utils';

import { UserTabWrap } from './UserTab.styles';

const UserTab = () => {
  const { user } : { user: any } = useSelector((state: RootState) => state.user);
  const { members } : { members: any } = useSelector((state: RootState) => state.member);
  const targetTeam = searchUserTeam(user.email, members);
  
  return (
    <UserTabWrap>
      <User userInfo={user} userTeam={targetTeam}/>
    </UserTabWrap>
  );
};

export default UserTab;