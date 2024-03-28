import { ButtonProps } from '@mui/material';
import { PdgIconProps } from '../PdgIcon';
export interface PdgButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
    icon?: PdgIconProps['children'];
    startIcon?: PdgIconProps['children'];
    endIcon?: PdgIconProps['children'];
}
