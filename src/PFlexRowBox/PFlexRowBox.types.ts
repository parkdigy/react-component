import { PBoxProps } from '../PBox';

export interface PFlexRowBoxProps extends Omit<PBoxProps, 'display' | 'flexDirection' | 'component'> {
  center?: boolean;
  centerHorizontal?: boolean;
  inline?: boolean;
  span?: boolean;
  nowrap?: boolean;
  spacing?: number | string;
}
