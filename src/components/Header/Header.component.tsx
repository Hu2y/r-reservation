import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrap, ListWrap, List } from './Header.styles';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <button>reservation logo</button>
      </div>
      <div>
        <ListWrap>
          <List><Link to="/reference/9층">회의실 현황</Link></List>
          <List><Link to="/member">사원 정보</Link></List>
        </ListWrap>
      </div>
    </HeaderWrap>
  );
};

export default Header;