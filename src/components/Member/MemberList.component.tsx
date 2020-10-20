import React, { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';

import Member from './Member.component';

import { fetchMemberStart } from '../../store/member/member.actions';
import { RootState } from '@/store/rootReducer';

import IMember from '../../@types/Member';

const MemberList = () => {
  const { members }: { members: IMember[]} = useSelector((state: RootState) => state.member)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemberStart());
  }, [])

  console.log(members)
  return (
    <div>
      { members.length !== 0 ? (
        members.map((memberData, index) => {
          const lastElement = index === members.length - 1;
          return <Member {...memberData} key={index} />
        })
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default MemberList;