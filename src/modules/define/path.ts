import IPath  from '@/@types/Path.ts';

export const pathUri: IPath = {
  main: '/',
};

export const getPath = (_pathname: string) => Object.keys(pathUri).find((key) => pathUri[key] === _pathname);