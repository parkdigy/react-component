import React, { ReactNode } from 'react';
import { PdgIconProps } from '../PdgIcon';
import { BoxProps } from '@mui/material';

export interface PdgIconTextProps extends BoxProps {
  children?: ReactNode;
  icon?: PdgIconProps['children'];
  iconMarginRight?: string | number;
  iconProps?: Partial<Omit<PdgIconProps, 'children' | 'ref'>>;
  textProps?: React.HTMLProps<HTMLSpanElement>;
}

export const PdgIconTextDefaultProps: Pick<PdgIconTextProps, 'iconMarginRight'> = {
  iconMarginRight: 3,
};
