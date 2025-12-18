import React from 'react';
import { ControlItemOpacityProps as Props } from './ControlItemOpacity.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((v) =>
  lv(`${v === 0 ? '0.0' : v === 1 ? '1.0' : v}`, v)
);

export const ControlItemOpacity = ({ label = '투명도', helperText = 'opacity', ...props }: Props) => {
  return <ControlItemButtonGroup label={label} helperText={helperText} items={Items} {...props} />;
};

export default ControlItemOpacity;
