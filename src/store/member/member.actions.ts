import MemberActionTypes from './member.types';
import IMember from '@/@types/Member';

export const fetchMemberStart = () => ({
  type: MemberActionTypes.FETCH_MEMBER_START,
  payload: null
});

export const fetchMemberSuccess = (members: any) => ({
  type: MemberActionTypes.FETCH_MEMBER_SUCCESS,
  payload: members
});

export const fetchMemberFailure = (errorMessage: string) => ({
  type: MemberActionTypes.FETCH_MEMBER_FAILURE,
  payload: errorMessage
});


export type MemberAction =
  | ReturnType<typeof fetchMemberStart>
  | ReturnType<typeof fetchMemberSuccess>
  | ReturnType<typeof fetchMemberFailure>;
