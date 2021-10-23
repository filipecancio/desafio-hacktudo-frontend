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

interface ICategorie {
  id: string;
  name: string;
  slug: string;
  iconUri: string;
}

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategorie[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ICategorie[]>('/categories');
      setCategories(data);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <ToolBar>
          <ImgIcon src={backArrowIcon} alt="back icon" />
          <span className="title">Todas as categorias</span>
        </ToolBar>
      </Header>
      <List>
        {categories.map((categorie) => (
          <ListItem key={categorie.id}>
            <ImgItem src={categorie.iconUri} alt="Categorie Icon" />
            <span className="descriptionName">{categorie.name}</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
