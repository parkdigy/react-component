import React from 'react';
import ControlItemTextField from '../ControlItemTextField';
import { ControlItemTextProps as Props } from './ControlItemText.types';

export const ControlItemText = ({ onChange, ...props }: Props) => {
  return <ControlItemTextField type='text' onChange={onChange as any} {...props} />;
};

export default ControlItemText;
