import { ReactNode } from 'react';
export interface PdgNumberTextProps {
    children?: string | number | null;
    value?: string | number | null;
    className?: string;
    decimalOpacity?: number;
    prefix?: ReactNode;
    prefixOpacity?: number;
    suffix?: ReactNode;
    suffixOpacity?: number;
}
