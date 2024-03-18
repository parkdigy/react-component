import React, { ReactNode } from 'react';
import { IconProps } from '../Icon';
import { BoxProps } from '@mui/material';
export interface IconTextProps extends BoxProps {
    children?: ReactNode;
    icon?: string;
    iconMarginRight?: string | number;
    iconProps?: Partial<Omit<IconProps, 'children' | 'ref'>>;
    textProps?: React.HTMLProps<HTMLSpanElement>;
}
export declare const IconTextDefaultProps: Pick<IconTextProps, 'iconMarginRight'>;
