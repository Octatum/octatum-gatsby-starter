import React from 'react';
import styled from 'styled-components';

import image from '../../assets/conoce-nuestros-procesos.png';

const Container = styled.div`
  margin: 2em 0;
`;

const BackgroundDiv = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background: teal;
  background: url(${image}) no-repeat 25% center;
  background-size: cover;
  z-index: -1;
`;

const Header = styled.h2`
  position: relative;
  padding: 0.5em;
  font-family: 'Playfair Display', 'Lato', sans-serif;
  font-size: 2.5em;
  color: ${props => props.theme.color.white};

  b {
    font-weight: 700;
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: 1em;
    width: 210px;
    background: ${props => props.theme.color.white};
  }
`;

const LinksDiv = styled.div`
  width: 50%;
  margin-top: -4em;
  font-weight: 800;
`;

const Item = styled.div`
  padding: 1em 2em;

  &:first-child {
    color: ${props => props.theme.color.green};
  }
`;

const Processes = () => (
  <Container>
    <BackgroundDiv>
      <Header>
        Conoce
        <br />
        nuestros
        <br />
        <b>procesos.</b>
      </Header>
    </BackgroundDiv>
    <LinksDiv>
      <Item>
        <p>
          Planeación
          <br />& administración
        </p>
      </Item>
      <Item>
        <p>
          Diseño
          <br />& conceptualización
        </p>
      </Item>
      <Item>
        <p>
          Desarrollo
          <br />
          web
        </p>
      </Item>
    </LinksDiv>
  </Container>
);

export default Processes;
