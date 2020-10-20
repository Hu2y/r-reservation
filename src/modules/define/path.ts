import IPath  from '@/@types/Path.ts';

export const pathUri: IPath = {
  main: '/',
  login: '/login',
};

export const getPath = (_pathname: string) => Object.keys(pathUri).find((key) => pathUri[key] === _pathname);