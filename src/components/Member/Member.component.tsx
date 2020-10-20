import React from 'react';

import { MemberWrap, Img, TopSection, BottomSection } from './MemberList.styles';

import IMember from '../../@types/Member';

export type IMemberProp = IMember;

const Member = (props: IMemberProp) => {
  const { name, email, picture } = props;
  return (
    <MemberWrap>
      <TopSection>
        <Img src={picture} alt={name}/>
      </TopSection>
      <BottomSection>
        <div>{name}</div>
        <div>{email}</div>
      </BottomSection>
    </MemberWrap>
  );
};

export default Member;