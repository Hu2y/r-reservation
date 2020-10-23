import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 0.8rem 1rem 0;
  padding: 0.5rem 1rem;
  /* width: 200px; */
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  transition: border 0.3s, box-shadow 0.3s;
  cursor: pointer;

  :hover {
    border-color: transparent;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  width:150px;
  height:150px;
  border: 1px solid #e6e6e6;
  background-color: #eee;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const UserInfoWrap = styled.div`
  margin-top: 0.5rem;
  span {
    margin: 0.7rem;
  }
`;

export const Name = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Team = styled.span`
  display: block;
  font-size: 1rem;
`;

export const Email = styled.span`
  display: block;
  font-size: 1rem;
`;