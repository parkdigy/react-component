import { PdgIconProps } from '../PdgIcon';
import { ReactNode } from 'react';
export interface PdgHelperProps extends Omit<PdgIconProps, 'ref' | 'children' | 'tooltip'> {
    text: ReactNode;
    position?: 'left' | 'right';
    opacity?: number;
    icon?: PdgIconProps['children'];
    children?: ReactNode;
}
