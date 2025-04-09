import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
import { PdgHelperProps } from '../PdgHelper';

export interface PdgTextProps extends Omit<TypographyProps, 'size' | 'color' | 'fontSize'> {
  size?: 'inherit' | 'large' | 'medium' | 'small' | number | string;
  color?: 'inherit' | 'large' | 'medium' | 'small' | string;
  helper?: ReactNode | PdgHelperProps;
  line?: boolean;
  ph?: string | number;
  pv?: string | number;
}
