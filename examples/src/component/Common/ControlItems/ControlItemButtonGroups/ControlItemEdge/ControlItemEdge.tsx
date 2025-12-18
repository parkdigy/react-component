import React from 'react';
import { ControlItemEdgeProps as Props } from './ControlItemEdge.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

const Items = (['start', 'end'] as const).map((v) => lv(v, v));

export const ControlItemEdge = (props: Props) => {
  return <ControlItemButtonGroup label='마진 조정' helperText='edge' items={Items} {...props} />;
};

export default ControlItemEdge;
