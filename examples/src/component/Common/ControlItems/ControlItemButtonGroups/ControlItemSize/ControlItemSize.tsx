import React from 'react';
import { ControlItemSizeProps as Props } from './ControlItemSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['small', 'medium', 'large'] as const).map((v) => lv(`${v}`, v));

export const ControlItemSize = (props: Props) => {
  return <ControlItemButtonGroup label='크기' helperText='size' items={Items} {...props} />;
};

export default ControlItemSize;
