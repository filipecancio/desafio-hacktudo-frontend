import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { currencyFormatter, dateTimeFormatter } from '../../utils/formatters';

import favIcon from '../../assets/icons/fav.png';
import filterIcon from '../../assets/icons/filter.png';
import searchIcon from '../../assets/icons/search.png';

import {
  Container,
  FilterBar,
  FilterBarItem,
  GroupIcons,
  Header,
  ImgIcon,
  ImgItem,
  List,
  ListItem,
  ListItemDescription,
  ToolBar,
} from './styles';

interface IProduct {
  name: string;
  price: number;
  photoUri: string;
  announcedIn: string;
  addressDistrict: string;
}

export const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IProduct[]>('/products');
      setProducts(data);
    })();
  }, []);

  return (
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
          <FilterBarItem>DDD 77-</FilterBarItem>
          <FilterBarItem>Categoria</FilterBarItem>
          <FilterBarItem>Filtros</FilterBarItem>
        </FilterBar>
      </Header>
      <List>
        {products.map((product) => (
          <ListItem key={product.name}>
            <ImgItem src={product.photoUri} alt="logo Filtros" />
            <ListItemDescription>
              <span>{product.name}</span>
              <span className="price">
                {currencyFormatter.format(product.price)}
              </span>
              <span>
                {`${dateTimeFormatter.format(new Date(product.announcedIn))}, ${
                  product.addressDistrict
                }`}
              </span>
            </ListItemDescription>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
