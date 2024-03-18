import { ReactNode } from 'react';

export interface PdgNumberTextProps {
  value?: string | number | null;
  className?: string;
  decimalOpacity?: number;
  suffix?: ReactNode;
  suffixOpacity?: number;
}
