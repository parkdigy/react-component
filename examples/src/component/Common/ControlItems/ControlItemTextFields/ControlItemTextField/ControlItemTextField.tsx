import React, { ChangeEvent, useCallback, useState } from 'react';
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

  const [value, setValue] = useState(initValue ?? '');

  const [prevInitValue, setPrevInitValue] = useState(initValue);
  if (initValue !== prevInitValue) {
    setPrevInitValue(initValue);
    setValue(initValue ?? '');
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ControlItemBase label={label} helperText={helperText}>
      <TextField size={size} value={value} onChange={handleChange} {...props} />
    </ControlItemBase>
  );
};

export default ControlItemTextField;
