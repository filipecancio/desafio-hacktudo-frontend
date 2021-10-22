import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import backArrowIcon from '../../assets/icons/back-arrow.png';

import {
  Container,
  Header,
  ImgIcon,
  ImgItem,
  List,
  ListItem,
  ToolBar,
} from './styles';

interface IProduct {
  id: string;
  name: string;
  slug: string;
  iconUri: string;
}

export const Categorias: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IProduct[]>('/categories');
      setProducts(data);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <ToolBar>
          <ImgIcon src={backArrowIcon} alt="logo" />
          <span className="titulo">Todas as categorias</span>
        </ToolBar>
      </Header>
      <List>
        {products.map((categorie) => (
          <ListItem key={categorie.name}>
            <ImgItem src={categorie.iconUri} alt="logo Filtros" />
            <span className="nomeCategoria">{categorie.name}</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
