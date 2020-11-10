import React from 'react';

import { MemberWrap, Img, TopSection, BottomSection, Name, Email } from './MemberCard.styles';

import IMember from '../../../@types/Member';

export type IMemberProp = IMember;

const MemberCard = (props: IMemberProp) => {
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

export default MemberCard;