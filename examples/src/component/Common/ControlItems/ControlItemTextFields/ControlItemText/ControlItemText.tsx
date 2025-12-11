import React from 'react';
import ControlItemTextField from '../ControlItemTextField';
import { ControlItemTextProps as Props } from './ControlItemText.types';

export const ControlItemText: React.FC<Props> = ({ onChange, ...props }) => {
  return <ControlItemTextField type='text' onChange={onChange as any} {...props} />;
};

export type TControlItemText = typeof ControlItemText;

export default ControlItemText;
