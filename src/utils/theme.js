const theme = {
  breakpoints: ['32em', '48em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    black: '#050505',
    lightBlack: '#111',
    green: '#32a100',
    white: '#ffffff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'Raleway, sans-serif',
    serif: '"Playfair Display", monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
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
