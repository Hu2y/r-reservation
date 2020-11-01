import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import Schedule from '@/components/Schedule/Schedule.component';
// test
import ScheduleTest from '@/components/Schedule/ScheduleTest.component';
import Room from '@/components/Room/Room.component';
import UserTab from '@/components/User/UserTab/UserTab.component';

import { pathUri } from '@/modules/define/path';
import { fetchMemberStart } from '@/store/member/member.actions';
import { RootState } from '@/store/rootReducer';
import MatchParams from '@/@types/MatchParams';

import { ScheduleWarp } from './Schedule.styles';

const ScheduleContainer = () => {
  const { onceFetching } : { members: any, onceFetching: boolean } = useSelector((state: RootState) => state.member);
  const { tokenId } : { tokenId: any } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const { params: { id } } = useRouteMatch<MatchParams>();

  useEffect(() => {
    if(!tokenId) return history.push(pathUri.login);
    if(!onceFetching) dispatch(fetchMemberStart());
  }, []);

  return (
    <ScheduleWarp>
      <UserTab/>
      <div>
        {id ? id : null}
        <Room />
        <ScheduleTest />
      </div>
    </ScheduleWarp>
  );
};

export default ScheduleContainer;