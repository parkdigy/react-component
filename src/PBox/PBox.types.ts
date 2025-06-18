import { BoxProps } from '@mui/material';

export interface PBoxProps extends BoxProps {
  ph?: string | number;
  pv?: string | number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullSize?: boolean;
}
