import { IconProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

export interface PdgIconProps extends Pick<IconProps, 'color' | 'style' | 'sx' | 'className' | 'fontSize'> {
  children?: string | SvgIconComponent;
}
