import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';

export interface PdgDateTextProps {
  className?: string;
  style?: CSSProperties;
  dateClassName?: string;
  dateStyle?: CSSProperties;
  timeClassName?: string;
  timeStyle?: CSSProperties;
  value: string | Date | Dayjs | undefined | null;
  twoLine?: boolean;
  date?: boolean;
  hour?: boolean;
  minute?: boolean;
}
