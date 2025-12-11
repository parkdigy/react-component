import { PBoxProps } from '../PBox';

export interface PStackProps extends Omit<PBoxProps, 'display' | 'flexDirection' | 'component'> {
  row?: boolean;
  center?: boolean;
  centerJustifyContent?: boolean;
  inline?: boolean;
  span?: boolean;
  wrap?: boolean;
  spacing?: number | string;
}
