import React from 'react';
import { ControlItemDisableFocusRippleProps as Props } from './ControlItemDisableFocusRipple.types';
import ControlItemOnOff from '../ControlItemOnOff';

export const ControlItemDisableFocusRipple: React.FC<Props> = (props) => {
  return <ControlItemOnOff label='키보드(TAB) 포커스 해제' helperText='disableFocusRipple' {...props} />;
};

export type TControlItemDisableFocusRipple = typeof ControlItemDisableFocusRipple;

export default ControlItemDisableFocusRipple;
