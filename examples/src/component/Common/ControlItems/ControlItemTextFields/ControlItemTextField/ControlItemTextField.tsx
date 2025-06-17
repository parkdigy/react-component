import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ControlItemTextFieldProps as Props } from './ControlItemTextField.types';
import ControlItemBase from '../../ControlItemBase';
import { TextField, TextFieldProps } from '@mui/material';
import { ifUndefined } from '@pdg/compare';

export const ControlItemTextField: React.FC<Props> = ({
  size,
  label,
  helperText,
  value: initValue,
  onChange,
  ...props
}) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState<TextFieldProps['value']>(initValue || '');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setValue(initValue || '');
  }, [initValue]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange && onChange(newValue);
    },
    [onChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ControlItemBase label={label} helperText={helperText}>
      <TextField size={ifUndefined(size, 'small')} value={value} onChange={handleChange} {...props} />
    </ControlItemBase>
  );
};

export type TControlItemTextField = typeof ControlItemTextField;

export default ControlItemTextField;
