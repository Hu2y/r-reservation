import IMember from '../@types/Member';

export const makePartsMap = (data: Array<IMember>) => {
  if(!data) return;
  const partsMap = new Map();
  
  data.forEach((user) => {
    if (!partsMap.get(user.part)) {
      partsMap.set(user.part, {});
      partsMap.get(user.part)[user.team] = [user];
    } else if (!partsMap.get(user.part)[user.team]) {
      partsMap.get(user.part)[user.team] = [user];
    } else {
      partsMap.get(user.part)[user.team].push(user);
    }
  });
  return Array.from(partsMap);
};

export const searchUserTeam = (email: string, members: any) => {
  if(!email && !members) return;
  let targetTeam = '';
  members.forEach((partData: any) => {
    const [partName, teamData] = partData;
    for(let team in teamData) {
      teamData[team].forEach((target: any) => {
        if(target.email === email) {
          targetTeam = target.team;
          return;
        }
      });
    }
  });
  return targetTeam;
};

export const searchReservationInfo = (reservation: any, layer: string) => {
  const result = reservation.filter((room: any) => room.layer == layer);
  return result[0].scheduleData;
};