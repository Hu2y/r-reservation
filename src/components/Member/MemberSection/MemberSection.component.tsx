import React from 'react';

const MemberSection = ({ members }: any) => {
  if(!members) return <div>loading...</div>;
  const partList = members.map((partData: any) => {
    const [partName, teamData] = partData;
    // console.log(partName, teamData);
  })

  return (
    <>
      {/* {partList} */}
    </>
  );
};

export default MemberSection;