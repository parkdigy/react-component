import React from 'react';
import { ControlItemDisabledProps as Props } from './ControlItemDisabled.types';
import ControlItemOnOff from '../ControlItemOnOff';

export const ControlItemDisabled = (props: Props) => {
  return <ControlItemOnOff label='비활성' helperText='disabled' {...props} />;
};

export default ControlItemDisabled;
