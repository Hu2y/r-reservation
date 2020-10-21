import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MemberTab from '@/components/Member/MemberTab/MemberTab.component';
import MemberSection from '@/components/Member/MemberSection/MemberSection.component';

import { fetchMemberStart } from '@/store/member/member.actions';
import { RootState } from '@/store/rootReducer';
import IMember from '@/@types/Member';

const MemberContainer = () => {
  const { members } : { members: any } = useSelector((state: RootState) => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemberStart());
  }, [])

  return (
    <>
      <MemberTab members={members} />
      <MemberSection members={members} />
    </>
  );
};

export default MemberContainer;