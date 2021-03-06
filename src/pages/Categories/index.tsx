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

interface ICategory {
  id: string;
  name: string;
  slug: string;
  iconUri: string;
}

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ICategory[]>('/categories');
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
        {categories.map((category) => (
          <ListItem key={category.id}>
            <ImgItem src={category.iconUri} alt="Category Icon" />
            <span className="descriptionName">{category.name}</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
