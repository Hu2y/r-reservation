import React from 'react';

const Part = ({partName, teamData}: any) => {
  const teamList: any = [];
  for(let team in teamData) {
    teamList.push(
      <li key={team}>
        <a href={`#${team}`}>{team} ({teamData[team].length}) </a>
      </li>
    )
  }
  return (
    <>
      <h3>
        <a href={`#${partName}`}>{partName}</a>
      </h3>
      <ul>
        {teamList}
      </ul>
    </>
  );
};

export default Part;