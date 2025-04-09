import { BoxProps } from '@mui/material';
export interface PdgFlexProps extends Omit<BoxProps, 'display' | 'flexDirection' | 'component'> {
    row?: boolean;
    spacing?: number | string;
    alignCenter?: boolean;
    justifyCenter?: boolean;
}
