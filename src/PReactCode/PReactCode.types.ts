import { BoxProps } from '@mui/material';

export interface PReactCodeProps extends Omit<BoxProps, 'children' | 'content'> {
  name: string;
  content?: string | number;
  props?: { [key: string]: any };
}
