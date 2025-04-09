import { BoxProps } from '@mui/material';

export interface PdgFlexRowBoxProps extends Omit<BoxProps, 'display' | 'flexDirection' | 'component'> {
  center?: boolean;
  centerHorizontal?: boolean;
  inline?: boolean;
  span?: boolean;
  nowrap?: boolean;
  spacing?: number | string;
}
