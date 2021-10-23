import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  margin-bottom: 15px;
  background: #219653;

  min-height: 4rem;
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: black;
  height: 65px;
  padding: 23px;

  > .title {
    margin-left: 25px;
  }
`;

export const ImgIcon = styled.img``;

export const List = styled.div`
  padding: 50px;
`;

export const ListItem = styled.div`
  height: 134px;
  display: flex-grid;
  align-items:center;
  text-align: center;
  margin-bottom: 5px;
  border-radius: 4px;
  padding: 8px;
  width: 50%;
  
  > .descriptionName {
    color: #204628;
  }
`;

export const ImgItem = styled.img`
  width: 6rem;
  border-radius: 4px;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 15px;
`;
