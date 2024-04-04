import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';
export type PdgDateTextType = 'datetime' | 'date' | 'hour' | 'minute';
export interface PdgDateTextProps {
    children?: string | Date | Dayjs | undefined | null;
    value?: string | Date | Dayjs | undefined | null;
    type?: PdgDateTextType;
    className?: string;
    style?: CSSProperties;
    twoLine?: boolean;
    dateClassName?: string;
    dateStyle?: CSSProperties;
    dateOpacity?: number;
    dateSeparator?: string;
    timeClassName?: string;
    timeStyle?: CSSProperties;
    timeOpacity?: number;
}
