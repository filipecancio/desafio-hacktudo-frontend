import React from 'react';
import { Container, Frame } from './styles';

export const Scaffold: React.FC = ({ children }) => (
  <>
    <Container>
      <Frame>{children}</Frame>
    </Container>
  </>
);
