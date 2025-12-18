import React from 'react';
import { PNumberTextProps } from '../PNumberText';
export interface PWonTextProps extends Omit<PNumberTextProps, 'suffix'> {
    ref?: React.Ref<HTMLSpanElement>;
}
