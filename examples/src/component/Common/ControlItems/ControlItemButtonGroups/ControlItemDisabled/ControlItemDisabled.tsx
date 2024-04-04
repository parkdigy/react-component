import React from 'react';
import { ControlItemDisabledProps as Props } from './ControlItemDisabled.types';
import ControlItemOnOff from '../ControlItemOnOff';

export const ControlItemDisabled: React.FC<Props> = (props) => {
  return <ControlItemOnOff label='disabled' helperText='비활성' {...props} />;
};

export type TControlItemDisabled = typeof ControlItemDisabled;

export default ControlItemDisabled;
