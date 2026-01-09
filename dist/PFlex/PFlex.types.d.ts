import React from 'react';
import { type PBoxProps } from '../PBox';
export interface PFlexProps extends Omit<PBoxProps, 'display' | 'flexDirection' | 'component'> {
    ref?: React.Ref<HTMLDivElement>;
    row?: boolean;
    spacing?: number | string;
    alignCenter?: boolean;
    justifyCenter?: boolean;
}
