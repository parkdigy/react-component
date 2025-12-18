import React from 'react';
import { ControlItemIconProps as Props } from './ControlItemIcon.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['AccountCircle', 'Add', 'AddCircle', 'AddToQueue', 'Apartment'] as const).map((v) => lv(v, v));
export const ControlItemIcon = ({ label = '아이콘', helperText = 'icon', ...props }: Props) => {
  return <ControlItemButtonGroup label={label} helperText={helperText} items={Items} {...props} />;
};

export default ControlItemIcon;
