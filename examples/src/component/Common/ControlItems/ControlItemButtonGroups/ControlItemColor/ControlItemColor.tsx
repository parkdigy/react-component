import React from 'react';
import { ControlItemColorProps as Props } from './ControlItemColor.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['primary', 'secondary', 'info', 'success', 'error', 'warning', '#aabbcc'] as const).map((v) =>
  lv(v, v)
);

export const ControlItemColor = ({ label = '색상', helperText = 'color', ...props }: Props) => {
  return <ControlItemButtonGroup label={label} helperText={helperText} items={Items} {...props} />;
};

export default ControlItemColor;
