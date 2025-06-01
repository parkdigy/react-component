import { PdgBoxProps } from '../PdgBox';

export interface PdgStackProps extends Omit<PdgBoxProps, 'display' | 'flexDirection' | 'component'> {
  row?: boolean;
  center?: boolean;
  centerJustifyContent?: boolean;
  inline?: boolean;
  span?: boolean;
  wrap?: boolean;
  spacing?: number | string;
}
