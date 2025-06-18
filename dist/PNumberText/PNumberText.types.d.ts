import { ReactNode } from 'react';
import { PTextProps } from '../PText';
export interface PNumberTextProps extends Omit<PTextProps, 'children' | 'prefix'> {
    children?: string | number | null;
    value?: string | number | null;
    decimalOpacity?: number;
    prefix?: ReactNode;
    prefixOpacity?: number;
    suffix?: ReactNode;
    suffixOpacity?: number;
}
