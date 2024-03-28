import { ReactNode } from 'react';
export interface PdgNumberTextProps {
    value?: string | number | null;
    className?: string;
    decimalOpacity?: number;
    prefix?: ReactNode;
    prefixOpacity?: number;
    suffix?: ReactNode;
    suffixOpacity?: number;
}
