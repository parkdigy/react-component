import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
import { PHelperProps } from '../PHelper';
export interface PTextProps extends Omit<TypographyProps, 'size' | 'fontSize'> {
    size?: 'inherit' | 'large' | 'medium' | 'small' | number | string;
    helper?: ReactNode | PHelperProps;
    line?: boolean;
    center?: boolean;
    ph?: string | number;
    pv?: string | number;
    mh?: string | number;
    mv?: string | number;
    fullWidth?: boolean;
    fullHeight?: boolean;
    fullSize?: boolean;
}
