import React from 'react';
import { IconProps, TooltipProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

export interface PIconProps extends Omit<IconProps, 'size' | 'fontSize' | 'children' | 'ref' | 'color'> {
  ref?: React.Ref<HTMLSpanElement>;
  size?: IconProps['fontSize'] | number | string;
  color?: IconProps['color'] | string;
  children?: string | SvgIconComponent;
  tooltip?: TooltipProps['title'];
  tooltipPlacement?: TooltipProps['placement'];
  tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
}
