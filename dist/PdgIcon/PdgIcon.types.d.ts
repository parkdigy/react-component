import { IconProps, TooltipProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
export interface PdgIconProps extends Omit<IconProps, 'size' | 'fontSize' | 'children' | 'ref' | 'color'> {
    size?: IconProps['fontSize'] | number | string;
    color?: IconProps['color'] | string;
    children?: string | SvgIconComponent;
    tooltip?: TooltipProps['title'];
    tooltipPlacement?: TooltipProps['placement'];
    tooltipProps?: Omit<TooltipProps, 'title' | 'placement' | 'children'>;
}
