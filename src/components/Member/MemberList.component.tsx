import React, { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';

import Member from './Member.component';

import { fetchMemberStart } from '../../store/member/member.actions';
import { RootState } from '@/store/rootReducer';

import IMember from '../../@types/Member';

const MemberList = () => {
  const { members }: { members: any} = useSelector((state: RootState) => state.member)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemberStart());
  }, [])

  const partList = members.map((partData: any) => {
    const [partName, teamsData] = partData;
    console.log(partName,teamsData)
    // return <PartBox key={partName} {...{ language, partName, teamsData }} />;
  });

  return (
    <div>
      { members.length !== 0 ? (
        members.map((memberData: any, index: any) => {
          // 무한스크롤링이 필요한가?
          // const lastElement = index === members.length - 1;

          // console.log(memberData)
          return (
            <div>
              {partList}
            </div>
          )
        })
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default MemberList;