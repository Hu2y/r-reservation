import React from 'react';
import { Link } from 'react-router-dom';

import { roomInfo } from '@/modules/define/room';

import { RoomWrap, ButtonWrap, LayerButton } from './Room.styles';

const Room = () => {
  return (
    <RoomWrap>
      {
        roomInfo ? (
          roomInfo.rooms.map((room, index) => {
            return (
              <ButtonWrap key={index}>
                <Link to={`/reference/${room.id}`}>
                  <LayerButton>{room.layer}</LayerButton>
                </Link>
              </ButtonWrap>
            )
          })
        ) : (
          <div>회의실 정보가 없습니다.</div>
        )
      }
    </RoomWrap>
  );
};

export default Room;