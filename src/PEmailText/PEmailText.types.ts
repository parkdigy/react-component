import React from 'react';
import { type PTextProps } from '../PText';

export interface PEmailTextProps extends Omit<PTextProps, 'children' | 'ref'> {
  ref?: React.Ref<HTMLAnchorElement>;
  children?: string | null;
  value?: string | null;
}
