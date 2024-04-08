import { BoxProps } from '@mui/material';
export interface PdgFlexCenterBoxProps extends Omit<BoxProps, 'display' | 'alignItems' | 'component'> {
    span?: boolean;
}
