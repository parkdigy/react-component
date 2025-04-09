import { BoxProps } from '@mui/material';

export interface PdgFlexColumnBoxProps extends Omit<BoxProps, 'display' | 'flexDirection' | 'component'> {
  spacing?: number | string;
  center?: boolean;
  centerVertical?: boolean;
}
