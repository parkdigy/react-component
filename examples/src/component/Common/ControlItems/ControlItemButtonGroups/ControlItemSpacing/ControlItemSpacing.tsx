import React from 'react';
import { ControlItemSpacingProps as Props } from './ControlItemSpacing.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = ([0.5, 1.0, 2.0, 3.0] as const).map((v) => lv(`${v}`, v));

export const ControlItemSpacing = ({ label = '간격', helperText = 'spacing', ...props }: Props) => {
  return <ControlItemButtonGroup label={label} helperText={helperText} items={Items} {...props} />;
};

export default ControlItemSpacing;
