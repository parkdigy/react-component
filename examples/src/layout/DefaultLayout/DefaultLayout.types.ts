import { createTheme, LinkProps } from '@mui/material';
import LinkBehavior from './LinkBehavior';

export const theme = createTheme({
  typography: {
    fontFamily: ['Pretendard', 'Apple Gothic', 'Dotum', 'sans-serif'].join(','),
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'outlined',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '.MuiDialogTitle-root + .MuiDialogContent-root': {
            paddingTop: 24,
          },
        },
      },
    },
  },
});
