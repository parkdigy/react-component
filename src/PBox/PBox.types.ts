import { BoxProps } from '@mui/material';

export interface PBoxProps extends BoxProps {
  ph?: string | number;
  pv?: string | number;
  mh?: string | number;
  mv?: string | number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullSize?: boolean;
}
