import { ReactNode } from 'react';
import { PdgTextProps } from '../PdgText';
export interface PdgNumberTextProps extends Omit<PdgTextProps, 'children' | 'prefix'> {
    children?: string | number | null;
    value?: string | number | null;
    decimalOpacity?: number;
    prefix?: ReactNode;
    prefixOpacity?: number;
    suffix?: ReactNode;
    suffixOpacity?: number;
}
