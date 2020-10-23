import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Schedule from '@/components/Schedule/Schedule.component';
import UserTab from '@/components/User/UserTab/UserTab.component';

import { pathUri } from '@/modules/define/path';
import { fetchMemberStart } from '@/store/member/member.actions';
import { RootState } from '@/store/rootReducer';

import { ScheduleWarp } from './Schedule.styles';

const ScheduleContainer = () => {
  const { onceFetching } : { members: any, onceFetching: boolean } = useSelector((state: RootState) => state.member);
  const { tokenId } : { tokenId: any } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if(!tokenId) return history.push(pathUri.login);
    if(!onceFetching) dispatch(fetchMemberStart());
  }, [])

  return (
    <ScheduleWarp>
      <UserTab/>
      <Schedule />
    </ScheduleWarp>
  );
};

export default ScheduleContainer;