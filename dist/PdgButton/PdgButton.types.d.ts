import { ButtonProps, TooltipProps } from '@mui/material';
import { PdgIconProps } from '../PdgIcon';
export interface PdgButtonProps extends Omit<ButtonProps, 'ref' | 'startIcon' | 'endIcon' | 'color'> {
    color?: ButtonProps['color'] | string;
    startIcon?: PdgIconProps['children'];
    startIconMarginLeft?: number;
    startIconMarginRight?: number;
    startIconProps?: Omit<PdgIconProps, 'children'>;
    endIcon?: PdgIconProps['children'];
    endIconMarginLeft?: number;
    endIconMarginRight?: number;
    endIconProps?: Omit<PdgIconProps, 'children'>;
    tooltip?: TooltipProps['title'];
    tooltipPlacement?: TooltipProps['placement'];
    tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
}
