import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
import { PdgHelperProps } from '../PdgHelper';

export interface PdgTextProps extends Omit<TypographyProps, 'size' | 'fontSize'> {
  size?: 'inherit' | 'large' | 'medium' | 'small' | number | string;
  helper?: ReactNode | PdgHelperProps;
  line?: boolean;
  center?: boolean;
  ph?: string | number;
  pv?: string | number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullSize?: boolean;
}
