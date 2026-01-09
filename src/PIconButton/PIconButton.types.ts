import React from 'react';
import { type IconButtonProps, type TooltipProps } from '@mui/material';
import { type PIconProps } from '../PIcon';

export interface PIconButtonProps extends Omit<IconButtonProps, 'children' | 'color' | 'ref'> {
  ref?: React.Ref<HTMLButtonElement>;
  children: PIconProps['children'];
  color?: PIconProps['color'];
  iconSize?: PIconProps['size'];
  iconProps?: Omit<PIconProps, 'children' | 'ref'>;
  tooltip?: TooltipProps['title'];
  tooltipPlacement?: TooltipProps['placement'];
  tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
  fullWidth?: boolean;
}
