import { TypographyProps } from '@mui/material';
export interface PdgTextProps extends Omit<TypographyProps, 'size' | 'color'> {
    size?: 'inherit' | 'large' | 'medium' | 'small' | number | string;
    color?: 'inherit' | 'large' | 'medium' | 'small' | string;
}
