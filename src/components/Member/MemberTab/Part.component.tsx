import React from 'react';

const Part = ({partName, teamData}: any) => {
  console.log(teamData)
  for(let name in teamData) {
    console.log(name);
  }
  // const teamList = teamData.map((team: any) => {
  //   const [teamName, memberData] = team;
  //   console.log(teamName, memberData)
  // })
  return (
    <>
      <h3>
        {/* <a href={`#${partName}`}>{partName}</a> */}
      </h3>
      <ul>
        {/* {teamList} */}
      </ul>
    </>
  );
};

export default Part;