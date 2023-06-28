/** @format */

// /** @format */

import { useKey } from 'hooks';
import theme from 'theme/themes';
import { KEY_CONTEXT } from 'utils';

export default () => {
  return {
    standard: {
      '& label.Mui-focused': {
        color: theme.palette.primary['main'],
      },
      '& label.MuiInputLabel-shrink': {
        transform: 'scale(1)',
      },
      '.MuiInput-root': {
        '&::before': {
          borderBottom: `1px solid ${theme.palette.grey[400]} !important`,
        },
        '&::after': {
          borderBottom: `1px solid ${theme.palette.primary['main']} !important`,
          transform: 'scaleX(0)',
        },
        '&.Mui-focused': {
          '&::after': {
            transform: 'scaleX(1)',
          },
        },
        '&:hover::before': {
          borderBottom: `1px solid ${theme.palette.grey[400]} !important`,
        },
      },
    },
    outlined: {
      '& label.Mui-focused': {
        color: theme.palette.primary['light'],
      },
      '& .MuiOutlinedInput-root': {
        '& input': {
          padding: '8.5px'
        },
        '& fieldset': {
          border: `1px solid ${theme.palette.grey[400]} !important`,
        },
        '&.Mui-focused fieldset': {
          border: `1px solid ${theme.palette.primary['main']} !important`,
        },
      },
    },
    filled: {},
    wrapLabel: {
      display: 'flex',
      alignItems: 'center',
    },
    rMark: {
      color: 'red',
      ml: 0.5,
    },
  };
};
