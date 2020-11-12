import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Day, WorkWeek, Month, ScheduleComponent, TreeViewArgs, ResourcesDirective, ResourceDirective,
  ViewsDirective, ViewDirective, ResourceDetails, Inject, TimelineViews, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { RootState } from '@/store/rootReducer';
import { fetchScheduleStart, getLayerSchedule } from '@/store/schedule/schedule.action';
import { searchReservationInfo } from '@/utils/utils';
import { extend } from '@syncfusion/ej2-base';
import * as dataSource from './datasource.json';

import MatchParams from '@/@types/MatchParams';

import { ScheduleWrap } from './Schedule.styles';
import './group-editing.css';

const ScheduleTest = () =>  {
  const dispatch = useDispatch();
  const { params: { id }} = useRouteMatch<MatchParams>();
  const { schedule: { info }, layerSchedule} : { schedule: any, layerSchedule: any } = useSelector((state: RootState) => state.schedule); 
  
  useEffect(() => {
    dispatch(fetchScheduleStart());
  }, []); 

  useEffect(() => {
    if(info === undefined) return;
    const scheduleData = searchReservationInfo(info, id);
    // data = scheduleData;
    const data = extend([], scheduleData, null!, true) as Object[];
    dispatch(getLayerSchedule(data));
  }, [id, info]);

  const resourceData: Object[] = [
    { Text: '회의실 소', Id: 1, Color: '#1aaa55' },
    { Text: '회의실 중', Id: 2, Color: '#357cd2' },
    { Text: '회의실 대', Id: 3, Color: '#7fa900' }
  ];

  const getEmployeeName = (value: ResourceDetails | TreeViewArgs): string => {
    return (((value as ResourceDetails).resourceData) ?
      (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField!] :
      (value as TreeViewArgs).resourceName) as string;
  }

  const getEmployeeImage = (value: ResourceDetails | TreeViewArgs): string => {
    let resourceName: string = getEmployeeName(value);
    return resourceName.replace(' ', '-').toLowerCase();
  }

  const getEmployeeDesignation = (value: ResourceDetails | TreeViewArgs): string => {
    let resourceName: string = getEmployeeName(value);
    return (resourceName === '회의실 소') ? 'Sales Representative' : (resourceName === '회의실 중') ?
      'Vice President, Sales' : 'Inside Sales Coordinator';
  }

  const monthEventTemplate = (props: any): JSX.Element => {
    return (<div className="subject">{props.Subject}</div>);
  }

  const resourceHeaderTemplate = (props: any): JSX.Element => {
    return (
      <div className="template-wrap">
        {/* <div className={"resource-image " + getEmployeeImage(props)}></div> */}
        <div className="resource-details">
          <div className="resource-name">{getEmployeeName(props)}</div>
          {/* <div className="resource-designation">{getEmployeeDesignation(props)}</div> */}
        </div>
      </div>
    );
  }
  console.log(layerSchedule)
  return (
    <ScheduleWrap>
      {
        layerSchedule.length ? (
          <div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent cssClass='group-editing' width='100%' selectedDate={new Date(2018, 5, 5)}
              currentView='WorkWeek' resourceHeaderTemplate={resourceHeaderTemplate.bind(this)}
              eventSettings={{
                dataSource: layerSchedule,
                fields: {
                  subject: { title: 'Conference Name', name: 'Subject' },
                  description: { title: 'Summary', name: 'Description' },
                  startTime: { title: 'From', name: 'StartTime' },
                  endTime: { title: 'To', name: 'EndTime' }
                }
              }}
              group={{ allowGroupEdit: true, resources: ['Conferences'] }} >
              <ResourcesDirective>
                <ResourceDirective field='ConferenceId' title='Attendees' name='Conferences' allowMultiple={true}
                  dataSource={resourceData} textField='Text' idField='Id' colorField='Color'>
                </ResourceDirective>
              </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option='Day' startHour='07:00' endHour='19:00'/>
                <ViewDirective option='WorkWeek' startHour='07:00' endHour='19:00'/>
                <ViewDirective option='Month' eventTemplate={monthEventTemplate.bind(this)} />
                <ViewDirective option='TimelineWeek' startHour='07:00' endHour='19:00'/>
              </ViewsDirective>
              <Inject services={[Day, WorkWeek, Month, TimelineViews, Resize, DragAndDrop]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
        ) : (
        <div>test</div>
        )
      }
    </ScheduleWrap>
  );
}

export default ScheduleTest;