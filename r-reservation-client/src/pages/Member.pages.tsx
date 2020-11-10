import React from 'react';

import MemberContainer from '@/container/Member/Member.container';

import { PageWrap } from './Page.styles';

const MemberPage = () => {
  return (
    <PageWrap>
      <MemberContainer />
    </PageWrap>
  );
};

export default MemberPage;