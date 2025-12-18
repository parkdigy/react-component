import React from 'react';
import { ControlItemVariantProps as Props } from './ControlItemVariant.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['contained', 'outlined', 'text'] as const).map((v) => lv(`${v}`, v));

export const ControlItemVariant = (props: Props) => {
  return <ControlItemButtonGroup label='버튼 모양' helperText='variant' items={Items} {...props} />;
};

export default ControlItemVariant;
