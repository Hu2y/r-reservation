import React from 'react';

import Part from '@/components/Member/MemberTab/Part.component';

import { MemberTabWrap } from './MemberTab.styles';

const MemberTab = ({ members }: any) => {
  if(!members) return <div>loading...</div>;
  const partList = members.map((partData: any) => {
    const [partName, teamData] = partData;
    return <Part key={partName} partName={partName} teamData={teamData} />
  });

  return (
    <MemberTabWrap>
      { partList }
    </MemberTabWrap>
  );
};

export default MemberTab;