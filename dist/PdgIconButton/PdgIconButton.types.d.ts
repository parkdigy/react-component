import { IconButtonProps } from '@mui/material';
export interface PdgIconButtonProps extends Omit<IconButtonProps, 'children'> {
    children: string;
}
