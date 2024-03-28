import { IconButtonProps } from '@mui/material';
import { PdgIconProps } from '../PdgIcon';
export interface PdgIconButtonProps extends Omit<IconButtonProps, 'children'> {
    children: PdgIconProps['children'];
}
