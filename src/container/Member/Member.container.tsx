import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MemberTab from '@/components/Member/MemberTab/MemberTab.component';
import MemberSection from '@/components/Member/MemberSection/MemberSection.component';

import { MemberWarp } from './Member.styles';

import { fetchMemberStart } from '@/store/member/member.actions';
import { RootState } from '@/store/rootReducer';
import IMember from '@/@types/Member';

const MemberContainer = () => {
  const { members, onceFetching } : { members: any, onceFetching: boolean } = useSelector((state: RootState) => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    if(onceFetching) return;
    dispatch(fetchMemberStart());
  }, [])

  return (
    <MemberWarp>
      <MemberTab members={members} />
      <MemberSection members={members} />
    </MemberWarp>
  );
};

export default MemberContainer;