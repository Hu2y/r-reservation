import React from 'react';

import Schedule from '@/components/Schedule/Schedule.component';
import UserTab from '@/components/User/UserTab/UserTab.component';

import { ScheduleWarp } from './Schedule.styles';

const ScheduleContainer = () => {
  return (
    <ScheduleWarp>
      <UserTab />
      <Schedule />
    </ScheduleWarp>
  );
};

export default ScheduleContainer;