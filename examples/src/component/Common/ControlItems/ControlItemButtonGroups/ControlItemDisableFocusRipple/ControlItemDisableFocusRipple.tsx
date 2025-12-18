import React from 'react';
import { ControlItemDisableFocusRippleProps as Props } from './ControlItemDisableFocusRipple.types';
import ControlItemOnOff from '../ControlItemOnOff';

export const ControlItemDisableFocusRipple = (props: Props) => {
  return <ControlItemOnOff label='키보드(TAB) 포커스 해제' helperText='disableFocusRipple' {...props} />;
};

export default ControlItemDisableFocusRipple;
