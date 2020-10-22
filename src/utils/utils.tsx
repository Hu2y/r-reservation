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
}