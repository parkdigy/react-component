import { BoxProps } from '@mui/material';
export interface PdgBoxProps extends BoxProps {
    ph?: string | number;
    pv?: string | number;
    fullWidth?: boolean;
    fullHeight?: boolean;
    fullSize?: boolean;
}
