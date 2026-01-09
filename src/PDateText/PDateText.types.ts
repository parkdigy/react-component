import { Dayjs } from 'dayjs';
import { type CSSProperties } from 'react';
import { type PTextProps } from '../PText';

export type PDateTextType = 'datetime' | 'date' | 'hour' | 'minute';

export interface PDateTextProps extends Omit<PTextProps, 'children'> {
  // 값
  children?: string | Date | Dayjs | undefined | null;
  // 값
  value?: string | Date | Dayjs | undefined | null;
  // 표시 구분
  type?: PDateTextType;
  // 두 줄로 표시 여부
  twoLine?: boolean;
  // 날짜 클래스명
  dateClassName?: string; // 날짜 클래스명
  // 날짜 스타일
  dateStyle?: CSSProperties;
  // 날짜 투명도
  dateOpacity?: number;
  // 날짜 구분자
  dateSeparator?: string;
  // 시간 클래스명
  timeClassName?: string;
  // 시간 스타일
  timeStyle?: CSSProperties;
  // 시간 투명도
  timeOpacity?: number;
}
