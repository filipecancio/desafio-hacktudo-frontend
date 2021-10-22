import React from 'react';
import { Text } from 'react-native';
import favIcon from '../../assets/icons/fav.png';
import filterIcon from '../../assets/icons/filter.png';
import searchIcon from '../../assets/icons/search.png';
import {
  Container,
  Header,
  GroupIcons,
  ImgIcon,
  ToolBar,
  FilterBar,
  FilterBarItem,
  List,
  ListItem,
  ImgItem,
  ListItemDescription,
} from './styles';

export const Home: React.FC = () => (
  <Container>
    <Header>
      <ToolBar>
        <ImgIcon src={filterIcon} alt="logo" />
        <GroupIcons>
          <ImgIcon src={searchIcon} alt="logo" />
          <ImgIcon src={favIcon} alt="logo" />
        </GroupIcons>
      </ToolBar>
      <FilterBar>
        <FilterBarItem>
          DDD 77-
        </FilterBarItem>
        <FilterBarItem>
          Categoria
        </FilterBarItem>
        <FilterBarItem>
          Filtros
        </FilterBarItem>
      </FilterBar>
    </Header>
    <List>
      <ListItem>
        <ImgItem src="https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-a-02-s-32gb-dual-sm-a025mzkvzto/gazinshop/9589/052ae7ff8a008d1e9724c2b6e9f71862.jpg" alt="logo Filtros" />
        <ListItemDescription>
          <Text>Titulo do Produto</Text>
          <Text>R$0.00</Text>
          <Text>16 ourutbor 21:05, Candeias</Text>
        </ListItemDescription>
      </ListItem>

      <ListItem>
        <ImgItem src="https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-a-02-s-32gb-dual-sm-a025mzkvzto/gazinshop/9589/052ae7ff8a008d1e9724c2b6e9f71862.jpg" alt="logo Filtros" />
        <ListItemDescription>
          <Text>Titulo do Produto</Text>
          <Text>R$0.00</Text>
          <Text>16 ourutbor 21:05, Candeias</Text>
        </ListItemDescription>
      </ListItem>

      <ListItem>
        <ImgItem src="https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-a-02-s-32gb-dual-sm-a025mzkvzto/gazinshop/9589/052ae7ff8a008d1e9724c2b6e9f71862.jpg" alt="logo Filtros" />
        <ListItemDescription>
          <Text>Titulo do Produto</Text>
          <Text>R$0.00</Text>
          <Text>16 ourutbor 21:05, Candeias</Text>
        </ListItemDescription>
      </ListItem>
    </List>
  </Container>
);
