import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

import { ScheduleWrap } from './Schedule.styles';

const Schedlue = () => {
  const localData: EventSettingsModel = {
    dataSource: [{
      Subject: 'metting',
      EndTime: new Date(2020, 9, 22, 13, 30),
      StartTime: new Date(2020, 9, 22, 12, 30)
    }, {
      Subject: 'test',
      EndTime: new Date(2020, 9, 22, 16, 30),
      StartTime: new Date(2020, 9, 22, 14, 30)
    }]
  }
  return (
    <ScheduleWrap>
      <ScheduleComponent currentView='Day' selectedDate={new Date(2020, 9, 22)} eventSettings={localData} >
        <ViewsDirective>
          <ViewDirective option='Day' startHour='07:00' endHour='19:00'/>
          <ViewDirective option='WorkWeek' startHour='07:00' endHour='19:00'/>
          <ViewDirective option='Agenda' startHour='07:00' endHour='19:00'/>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </ScheduleWrap>
  );
};

export default Schedlue;