import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import OctatumLogo from '../assets/octatum-black.svg';
import Navhub from './Navhub';
import BurgerMenu from './BurgerMenu';
import { Link } from 'gatsby';

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid #dfdfdf;
  transition: all 0.4s;
`;

const StyledFlex = styled(Flex)`
  max-width: 1300px;
  box-sizing: content-box;
  transition: 150ms ease all;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Navbar = () => {
  const [navhubOpen, setNavhubOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setTop(window.pageYOffset === 0);
    };

    return () => {
      window.onscroll = null;
    };
  });

  function closeNavhub() {
    setNavhubOpen(false);
  }

  function openNavhub() {
    setNavhubOpen(true);
  }

  return (
    <Container className={top ? 'top' : ''}>
      <StyledFlex
        mx="auto"
        px={[3, 3, 5]}
        py={top ? 4 : 3}
        justifyContent="space-between"
      >
        <Box>
          <Link style={{ display: 'block' }} to="/">
            <Image alt="Logotipo de Octatum" src={OctatumLogo} />
          </Link>
        </Box>
        <Box onClick={openNavhub} style={{ cursor: 'pointer' }}>
          <BurgerMenu open={navhubOpen} />
        </Box>
      </StyledFlex>
      <Navhub closeNavhub={closeNavhub} open={navhubOpen} />
    </Container>
  );
};

export default Navbar;
