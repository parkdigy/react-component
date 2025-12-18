import React from 'react';
import { ControlItemOnOffProps as Props } from './ControlItemOnOff.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = [true, false].map((v) => lv(v ? 'true' : 'false', v));

export const ControlItemOnOff = (props: Props) => {
  return <ControlItemButtonGroup items={Items} {...props} />;
};

export default ControlItemOnOff;
