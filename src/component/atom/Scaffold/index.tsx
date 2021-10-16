import React from 'react';
import { Container,Frame } from "./style";


const Index: React.FC = props => (
    <>
        <Container>
            <Frame>
                {props.children}
            </Frame>
      </Container>
    </>
);

export default Index;
