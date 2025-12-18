import React, { ChangeEvent, useState } from 'react';
import { ControlItemTextFieldProps as Props } from './ControlItemTextField.types';
import ControlItemBase from '../../ControlItemBase';
import { TextField } from '@mui/material';

export const ControlItemTextField = ({
  size = 'small',
  label,
  helperText,
  value: initValue,
  onChange,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [prevInitValue, setPrevInitValue] = useState(initValue);
  const [value, setValue] = useState(initValue ?? '');

  let finalValue = value;
  if (initValue !== prevInitValue) {
    setPrevInitValue(initValue);
    finalValue = initValue ?? '';
    setValue(finalValue);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ControlItemBase label={label} helperText={helperText}>
      <TextField size={size} value={finalValue} onChange={handleChange} {...props} />
    </ControlItemBase>
  );
};

export default ControlItemTextField;
