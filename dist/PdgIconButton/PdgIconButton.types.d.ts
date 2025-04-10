import { IconButtonProps, TooltipProps } from '@mui/material';
import { PdgIconProps } from '../PdgIcon';
export interface PdgIconButtonProps extends Omit<IconButtonProps, 'children' | 'color' | 'ref'> {
    children: PdgIconProps['children'];
    color?: PdgIconProps['color'];
    iconSize?: PdgIconProps['size'];
    iconProps?: Omit<PdgIconProps, 'children' | 'ref'>;
    tooltip?: TooltipProps['title'];
    tooltipPlacement?: TooltipProps['placement'];
    tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
    fullWidth?: boolean;
}
