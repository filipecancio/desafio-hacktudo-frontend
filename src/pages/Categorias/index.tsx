import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import backArrowIcon from '../../assets/icons/back-arrow.png';
import computadorImagem from '../../assets/images/computador.png';
// import smarthphoneImagem from '../../assets/images/smarthphone.png';

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
  name: string;
  price: number;
  photoUri: string;
  announcedIn: string;
  addressDistrict: string;
}

export const Categorias: React.FC = () => {
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
          <ImgIcon src={backArrowIcon} alt="logo" />
          <span className="titulo">Todas as categorias</span>
        </ToolBar>
      </Header>
      <List>
        {products.map((product) => (
          <ListItem key={product.name}>
            <ImgItem src={computadorImagem} alt="logo Filtros" />
            <span className="nomeDescricao">Computadores</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
