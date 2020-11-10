import React from 'react';

import ScheduleContainer from '@/container/Schedule/Schedule.container';

import { PageWrap } from './Page.styles';

const MainPage = () => {
  return (
    <PageWrap>
      <ScheduleContainer /> 
    </PageWrap>
  );
};

export default MainPage;