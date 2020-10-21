import React from 'react';

import { MemberWrap, Img, TopSection, BottomSection, Name, Email } from './MemberList.styles';

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
        <Name>{name}</Name>
        <Email>{email}</Email>
      </BottomSection>
    </MemberWrap>
  );
};

export default Member;