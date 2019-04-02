import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import './layout.css';
import theme from '../../utils/theme';
import Navbar from '../Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF);

function Layout(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
