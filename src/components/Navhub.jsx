import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Flex, Box } from 'rebass';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Text from './Text';

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
`;

const Address = styled(Box)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 2em;
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;

const GreenIcon = styled(OutboundLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.15em;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

const socialLinks = [
  {
    icon: ['fab', 'facebook-f'],
    link: 'https://fb.com/octatum',
  },
];

export const navigationIds = {
  projects: 'proyectos',
  about: 'nosotros',
  contact: 'contacto',
};

const LinkBox = styled(Box).attrs({
  as: Link,
  flex: 1,
})`
  display: block;
  text-decoration: none;
`;

const Navhub = ({ closeNavhub, open }) => {
  const props = useSpring({
    delay: open ? 150 : 0,
    to: open
      ? [
          {
            display: 'flex',
            opacity: 1,
            background: 'rgba(255, 255, 255, 0.3)',
          },
        ]
      : [
          { opacity: 0, background: 'rgba(255, 255, 255, 0)' },
          { display: 'none' },
        ],
  });

  return (
    <Container onClick={closeNavhub} as={animated.div} style={props}>
      <Box width={[1, 1, 1 / 2]} style={{ backgroundColor: '#050505' }}>
        <Flex
          px={[3, 4]}
          py={3}
          flexDirection="column"
          style={{ height: '100%' }}
        >
          <Box
            onClick={closeNavhub}
            style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
          >
            <Text color="white" size={8} style={{ lineHeight: '0.5em' }}>
              &times;
            </Text>
          </Box>
          <Box>
            <Address>
              <Box mb={[2, 3, 3]} pb={3}>
                <Text
                  color="white"
                  as="p"
                  textAlign="left"
                  size={1}
                  lineHeight="1"
                  uppercase
                >
                  Ponte en
                </Text>
                <Text
                  as="h2"
                  fontFamily="serif"
                  lineHeight="1"
                  size={7}
                  textAlign="left"
                  style={{ marginTop: '-0.1em' }}
                  bold
                  italic
                  color="white"
                >
                  contacto
                </Text>
              </Box>
            </Address>
            <Box pt={3}>
              <Text fontFamily="serif" color="white" as="p">
                contacto@octatum.com
              </Text>
            </Box>
          </Box>
          <Box flex="1" py={4}>
            <Flex
              flexDirection="column"
              alignItems="flex-end"
              style={{ textAlign: 'right', height: '100%' }}
              pt={[2, 3, 5]}
            >
              <LinkBox to={`/#${navigationIds.projects}`}>
                <Text color="white" size={3} as="p">
                  Explora nuestro{' '}
                  <Text color="white" as="span" fontFamily="serif" bold italic>
                    pasado
                  </Text>
                </Text>
                <Text size={1} fontFamily="serif" color="white">
                  proyectos
                </Text>
              </LinkBox>
              <LinkBox to={`/#${navigationIds.about}`}>
                <Text color="white" size={3} as="p">
                  Conoce nuestro{' '}
                  <Text color="white" as="span" fontFamily="serif" bold italic>
                    presente
                  </Text>
                </Text>
                <Text size={1} fontFamily="serif" color="white">
                  nosotros
                </Text>
              </LinkBox>
              <LinkBox to={`/#${navigationIds.contact}`}>
                <Text color="white" size={3} as="p">
                  Armemos un gran{' '}
                  <Text color="white" as="span" fontFamily="serif" bold italic>
                    futuro
                  </Text>
                </Text>
                <Text size={1} fontFamily="serif" color="white">
                  contacto
                </Text>
              </LinkBox>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text color="white" fontFamily="serif">
                  Creando{' '}
                  <Text as="span" weight="900" color="white">
                    arte web{' '}
                  </Text>
                  desde el 2018.
                </Text>
              </Box>
              <Flex>
                {socialLinks.map(item => (
                  <Box pl={4} key={item.link}>
                    <GreenIcon
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon={item.icon} />
                    </GreenIcon>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navhub;
