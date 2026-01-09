import React from 'react';
import { type PBoxProps } from '../PBox';

export interface PFlexColumnBoxProps extends Omit<PBoxProps, 'ref' | 'display' | 'flexDirection' | 'component'> {
  ref?: React.Ref<HTMLDivElement>;
  spacing?: number | string;
  center?: boolean;
  centerVertical?: boolean;
}
