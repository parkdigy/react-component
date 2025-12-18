import React from 'react';
import { PBoxProps } from '../PBox';

export interface PStackProps extends Omit<PBoxProps, 'ref' | 'display' | 'flexDirection' | 'component'> {
  ref?: React.Ref<HTMLDivElement | HTMLSpanElement>;
  row?: boolean;
  center?: boolean;
  centerJustifyContent?: boolean;
  inline?: boolean;
  span?: boolean;
  wrap?: boolean;
  spacing?: number | string;
}
