import React from 'react';
import { ControlItemFontSizeProps as Props } from './ControlItemFontSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['inherit', 'small', 'medium', 'large', 9, 50, 100] as const).map((v) => lv(`${v}`, v));

export const ControlItemFontSize = (props: Props) => {
  return <ControlItemButtonGroup label='크기' helperText='size' items={Items} {...props} />;
};

export default ControlItemFontSize;
