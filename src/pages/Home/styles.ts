import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background: #219653;

  min-height: 4rem;
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  color: black;
  height: 65px;
  padding: 23px;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  background: #efefef;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const FilterBarItem = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #204628;

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  width: 100%;
  padding: 15px 0;
`;

export const ImgIcon = styled.img``;

export const GroupIcons = styled.div`
  display: flex;
  gap: 15px;
  display: flex;
  align-items: flex-end;
`;

export const List = styled.div`
  padding: 8px;
`;

export const ListItem = styled.div`
  height: 134px;
  display: flex;
  margin-bottom: 5px;
  border-radius: 4px;
  padding: 8px;
  background-color: #f9f9f9;
`;

export const ImgItem = styled.img`
  width: 8rem;
  border-radius: 4px;
  max-height: 100%;
  object-fit: cover;
`;

export const ListItemDescription = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > .price {
    font-weight: bold;
  }
`;
