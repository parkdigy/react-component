import { ReactNode } from 'react';
import { PdgIconProps } from '../PdgIcon';
import { BoxProps } from '@mui/material';
import { PdgTextProps } from '../PdgText';

export interface PdgIconTextProps
  extends Omit<
    BoxProps,
    'ref' | 'children' | 'color' | 'size' | 'fontSize' | 'component' | 'display' | 'alignItems' | 'justifyContents'
  > {
  children?: ReactNode;
  color?: PdgTextProps['color'];
  size?: PdgTextProps['size'];
  icon?: PdgIconProps['children'];
  iconMarginRight?: string | number;
  iconProps?: Partial<Omit<PdgIconProps, 'children' | 'ref'>>;
  textProps?: Omit<PdgTextProps, 'children' | 'ref' | 'helper'>;
  helper?: PdgTextProps['helper'];
  ph?: string | number;
  pv?: string | number;
}
