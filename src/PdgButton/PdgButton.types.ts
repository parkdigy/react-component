import { ButtonProps, TooltipProps } from '@mui/material';
import { PdgIconProps } from '../PdgIcon';

export interface PdgButtonProps extends Omit<ButtonProps, 'ref' | 'startIcon' | 'endIcon' | 'color'> {
  color?: ButtonProps['color'] | string;
  icon?: PdgIconProps['children'];
  iconProps?: Omit<PdgIconProps, 'children'>;
  startIcon?: PdgIconProps['children'];
  startIconProps?: Omit<PdgIconProps, 'children'>;
  endIcon?: PdgIconProps['children'];
  endIconProps?: Omit<PdgIconProps, 'children'>;
  tooltip?: TooltipProps['title'];
  tooltipPlacement?: TooltipProps['placement'];
  tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
}
