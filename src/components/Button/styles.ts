/** @format */

import { useKey } from 'hooks';
import theme from 'theme/themes';

export default () => {
  const { getKey } = useKey();
  return {
    base: { textTransform: 'unset', minWidth: 120, maxHeight: 30 },
    contained: {
      default: {
        backgroundColor: theme.palette.primary['main'],
        border: `1px solid ${theme.palette.primary['main']}`,
        color: 'white',
        '&:hover': {
          color: theme.palette.primary['main'],
        },
      },
      error: {
        backgroundColor: theme.palette.error['light'],
        border: `1px solid ${theme.palette.error['light']}`,
        color: 'white',
        '&:hover': {
          color: theme.palette.error['light'],
        },
      },
      warning: {
        backgroundColor: theme.palette.warning['light'],
        border: `1px solid ${theme.palette.warning['light']}`,
        color: 'white',
        '&:hover': {
          color: theme.palette.warning['light'],
        },
      },
      success: {
        backgroundColor: theme.palette.success['light'],
        border: `1px solid ${theme.palette.success['light']}`,
        color: 'black',
        '&:hover': {
          color: theme.palette.success['dark'],
        },
      },
      info: {
        backgroundColor: theme.palette.info['light'],
        border: `1px solid ${theme.palette.info['light']}`,
        color: 'white',
        '&:hover': {
          color: theme.palette.info['light'],
        },
      },
      cancel: {
        backgroundColor: theme.palette.secondary['light'],
        color: 'white',
        border: `1px solid ${theme.palette.secondary['light']}`,
        '&:hover': {
          color: theme.palette.secondary['light'],
        },
      },
      none: {},
    },
    outlined: {
      none: {
        color: theme.palette.grey['400'],
        border: `1px solid ${theme.palette.primary['light']}`,
        '&:hover': {
          color: theme.palette.grey['400'],
        },
      },
      default: {
        color: theme.palette.primary['main'],
        border: `1px solid ${theme.palette.primary['main']}`,

        '&:hover': {
          color: theme.palette.primary['main'],
        },
      },
      error: {
        color: theme.palette.error['light'],
        border: `1px solid ${theme.palette.primary['light']}`,

        '&:hover': {
          color: theme.palette.error['light'],
        },
      },
      warning: {
        color: theme.palette.warning['light'],
        border: `1px solid ${theme.palette.primary['light']}`,

        '&:hover': {
          color: theme.palette.warning['light'],
        },
      },
      success: {
        color: theme.palette.success['light'],
        border: `1px solid ${theme.palette.primary['light']}`,

        '&:hover': {
          color: theme.palette.success['light'],
        },
      },
      info: {
        color: theme.palette.info['light'],
        border: `1px solid ${theme.palette.primary['light']}`,

        '&:hover': {
          color: theme.palette.info['light'],
        },
      },
      cancel: {
        color: theme.palette.secondary['light'],
        border: `1px solid ${theme.palette.primary['light']}`,

        '&:hover': {
          color: theme.palette.secondary['light'],
        },
      },
    },
    text: {
      none: {
        color: theme.palette.grey['400'],
        '&:hover': {
          color: theme.palette.grey['400'],
        },
      },
      default: {
        color: theme.palette.primary['main'],
        '&:hover': {
          color: theme.palette.primary['main'],
        },
      },
      error: {
        color: theme.palette.error['light'],
        '&:hover': {
          color: theme.palette.error['light'],
        },
      },
      warning: {
        color: theme.palette.warning['light'],
        '&:hover': {
          color: theme.palette.warning['light'],
        },
      },
      success: {
        color: theme.palette.success['light'],
        '&:hover': {
          color: theme.palette.success['light'],
        },
      },
      info: {
        color: theme.palette.info['light'],
        '&:hover': {
          color: theme.palette.info['light'],
        },
      },
      cancel: {
        color: theme.palette.secondary['light'],
        '&:hover': {
          color: theme.palette.secondary['light'],
        },
      },
    },
  };
};
