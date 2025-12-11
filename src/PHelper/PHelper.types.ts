import { PIconProps } from '../PIcon';
import { ReactNode } from 'react';

export interface PHelperProps extends Omit<PIconProps, 'ref' | 'children' | 'tooltip'> {
  className?: PIconProps['className'];
  style?: PIconProps['style'];
  sx?: PIconProps['sx'];
  text: ReactNode;
  position?: 'left' | 'right';
  opacity?: number;
  icon?: PIconProps['children'];
  children?: ReactNode;
}
