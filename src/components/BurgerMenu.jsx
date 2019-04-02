import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Flex } from '@rebass/grid';

const Layout = styled(Flex)`
  height: 100%;
  width: 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Bar = styled(animated.div)`
  background: ${({ theme }) => theme.color.black};
  height: 4px;
  border-radius: 4px;
`;

function BurgerMenu(props) {
  const { open } = props;
  const baseDelay = open ? 0 : 50;
  const delayIncrement = 50;

  const commonProps = {
    delay: baseDelay,
    to: { width: '0%' },
    reverse: !open,
    from: { width: '70%' },
  };

  const propsTopSpring = useSpring({
    ...commonProps,
  });

  const propsMiddleSpring = useSpring({
    ...commonProps,
    from: { width: '50%' },
    delay: baseDelay + delayIncrement * 2,
  });

  const propsBottomSpring = useSpring({
    ...commonProps,
    from: { width: '65%' },
    delay: baseDelay + delayIncrement * 1,
  });

  return (
    <Layout>
      <Bar style={propsTopSpring} />
      <Bar style={propsMiddleSpring} />
      <Bar style={propsBottomSpring} />
    </Layout>
  );
}

export default BurgerMenu;
