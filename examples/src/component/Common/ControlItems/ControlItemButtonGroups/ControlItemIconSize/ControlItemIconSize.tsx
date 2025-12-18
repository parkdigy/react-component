import React from 'react';
import { ControlItemIconSizeProps as Props } from './ControlItemIconSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['small', 'medium', 'large', 50, 100] as const).map((v) => lv(`${v}`, v));
export const ControlItemIconSize = ({ label = '크기', helperText = 'size', ...props }: Props) => {
  return <ControlItemButtonGroup label={label} helperText={helperText} items={Items} {...props} />;
};

export default ControlItemIconSize;
