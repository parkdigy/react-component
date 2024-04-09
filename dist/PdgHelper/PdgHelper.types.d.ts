import { PdgIconProps } from '../PdgIcon';
import { ReactNode } from 'react';
export interface PdgHelperProps extends Omit<PdgIconProps, 'ref' | 'children' | 'tooltip'> {
    className?: PdgIconProps['className'];
    style?: PdgIconProps['style'];
    sx?: PdgIconProps['sx'];
    text: ReactNode;
    position?: 'left' | 'right';
    opacity?: number;
    icon?: PdgIconProps['children'];
    children?: ReactNode;
}
