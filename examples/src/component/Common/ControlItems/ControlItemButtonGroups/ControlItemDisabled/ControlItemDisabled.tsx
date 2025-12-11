import React from 'react';
import { ControlItemDisabledProps as Props } from './ControlItemDisabled.types';
import ControlItemOnOff from '../ControlItemOnOff';

export const ControlItemDisabled: React.FC<Props> = (props) => {
  return <ControlItemOnOff label='비활성' helperText='disabled' {...props} />;
};

export type TControlItemDisabled = typeof ControlItemDisabled;

export default ControlItemDisabled;
