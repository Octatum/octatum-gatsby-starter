const theme = {
  space: undefined,
  breakpoints: ['32em', '48em', '64em'],
  color: {
    black: '#111',
    green: '#3FCA00',
    white: '#ffffff',
  },
};

const query = q => `@media (min-width: ${q})`;

export const mediaQueries = {
  small: query(theme.breakpoints[0]),
  medium: query(theme.breakpoints[1]),
  large: query(theme.breakpoints[2]),
  largest: query(theme.breakpoints[3]),
};

export default theme;
