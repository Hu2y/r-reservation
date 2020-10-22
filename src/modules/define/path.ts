import IPath  from '@/@types/Path.ts';

export const pathUri: IPath = {
  login: '/login',
  main: '/',
  member: '/member'
};

export const getPath = (_pathname: string) => Object.keys(pathUri).find((key) => pathUri[key] === _pathname);