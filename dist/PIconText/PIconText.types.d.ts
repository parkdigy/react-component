import React, { type ReactNode } from 'react';
import { type PIconProps } from '../PIcon';
import { type BoxProps } from '@mui/material';
import { type PTextProps } from '../PText';
export interface PIconTextProps extends Omit<BoxProps, 'ref' | 'children' | 'color' | 'size' | 'fontSize' | 'component' | 'display' | 'alignItems' | 'justifyContents'> {
    ref?: React.Ref<HTMLDivElement>;
    children?: ReactNode;
    color?: PTextProps['color'];
    size?: PTextProps['size'];
    icon?: PIconProps['children'];
    iconMarginRight?: string | number;
    iconProps?: Partial<Omit<PIconProps, 'children' | 'ref'>>;
    textProps?: Omit<PTextProps, 'children' | 'ref' | 'helper'>;
    helper?: PTextProps['helper'];
    ph?: string | number;
    pv?: string | number;
}
