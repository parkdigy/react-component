import React from 'react';
import { PBoxProps } from '../PBox';
export interface PFlexRowBoxProps extends Omit<PBoxProps, 'ref' | 'display' | 'flexDirection' | 'component'> {
    ref?: React.Ref<HTMLDivElement | HTMLSpanElement>;
    center?: boolean;
    centerHorizontal?: boolean;
    inline?: boolean;
    span?: boolean;
    nowrap?: boolean;
    spacing?: number | string;
}
