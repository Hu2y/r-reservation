import React from 'react';

import { MemberSectionWrap } from './MemberSection.styles';

const MemberSection = ({ members }: any) => {
  if(!members) return <div>loading...</div>;
  const partList = members.map((partData: any) => {
    const [partName, teamData] = partData;
    // console.log(partName, teamData);
  })

  return (
    <MemberSectionWrap>
      membersection
      {/* {partList} */}
    </MemberSectionWrap>
  );
};

export default MemberSection;