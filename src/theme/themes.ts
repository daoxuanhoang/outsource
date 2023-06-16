/** @format */

// import defaultTheme from './default';

import { createTheme } from '@mui/material';

const overrides = {
  typography: {
    fontFamily: `"Noto Sans", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: '48px',
    },
    h2: {
      fontSize: '32px',
    },
    h3: {
      fontSize: '26px',
    },
    h4: {
      fontSize: '24px',
    },
    h5: {
      fontSize: '20px',
    },
    h6: {
      fontSize: '18px',
    },
    small: {
      fontSize: '10px',
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: '600',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: '600',
    },
    smallBold: {
      fontSize: '10px',
      fontWeight: '700',
    },
    smallSemiBold: {
      fontSize: '10px',
      fontWeight: '600',
    },
    body1: {
      fontSize: '12px',
    },
    bodySemiBold: {
      fontSize: '12px',
      fontWeight: '600',
    },
    bodyBold: {
      fontSize: '12px',
      fontWeight: '700',
    },
  },
};

const theme = createTheme({ ...overrides });

export default theme;
