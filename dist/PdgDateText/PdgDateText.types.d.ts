import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';
import { PdgTextProps } from '../PdgText';
export type PdgDateTextType = 'datetime' | 'date' | 'hour' | 'minute';
export interface PdgDateTextProps extends Omit<PdgTextProps, 'children'> {
    children?: string | Date | Dayjs | undefined | null;
    value?: string | Date | Dayjs | undefined | null;
    type?: PdgDateTextType;
    twoLine?: boolean;
    dateClassName?: string;
    dateStyle?: CSSProperties;
    dateOpacity?: number;
    dateSeparator?: string;
    timeClassName?: string;
    timeStyle?: CSSProperties;
    timeOpacity?: number;
}
