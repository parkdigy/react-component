import { ButtonProps, TooltipProps } from '@mui/material';
import { PIconProps } from '../PIcon';
export interface PButtonProps extends Omit<ButtonProps, 'ref' | 'startIcon' | 'endIcon' | 'color'> {
    ph?: string | number;
    pv?: string | number;
    mh?: string | number;
    mv?: string | number;
    color?: ButtonProps['color'] | string;
    startIcon?: PIconProps['children'];
    startIconMarginLeft?: number | string;
    startIconMarginRight?: number | string;
    startIconProps?: Omit<PIconProps, 'children'>;
    endIcon?: PIconProps['children'];
    endIconMarginLeft?: number | string;
    endIconMarginRight?: number | string;
    endIconProps?: Omit<PIconProps, 'children'>;
    tooltip?: TooltipProps['title'];
    tooltipPlacement?: TooltipProps['placement'];
    tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
}
