import { Dayjs } from 'dayjs';
import { type CSSProperties } from 'react';
import { type PTextProps } from '../PText';
export type PDateTextType = 'datetime' | 'date' | 'hour' | 'minute';
export interface PDateTextProps extends Omit<PTextProps, 'children'> {
    children?: string | Date | Dayjs | undefined | null;
    value?: string | Date | Dayjs | undefined | null;
    type?: PDateTextType;
    twoLine?: boolean;
    dateClassName?: string;
    dateStyle?: CSSProperties;
    dateOpacity?: number;
    dateSeparator?: string;
    timeClassName?: string;
    timeStyle?: CSSProperties;
    timeOpacity?: number;
}
