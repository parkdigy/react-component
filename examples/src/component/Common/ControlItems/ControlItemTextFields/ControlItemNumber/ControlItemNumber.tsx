import React, { useCallback, useState } from 'react';
import ControlItemTextField from '../ControlItemTextField';
import { ControlItemNumberProps as Props } from './ControlItemNumber.types';
import { isNumericText } from '@pdg/compare';

export const ControlItemNumber = ({ value: initValue, onChange, ...props }: Props) => {
  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, setValue] = useState(initValue);

  const [prevInitValue, setPrevInitValue] = useState(initValue);
  if (initValue !== prevInitValue) {
    setPrevInitValue(initValue);
    setValue(initValue);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (newValue: any) => {
      let finalNewValue: Props['value'] = undefined;
      if (notEmpty(newValue)) {
        if (typeof newValue === 'number') {
          finalNewValue = newValue;
        } else if (typeof newValue === 'string' && isNumericText(newValue)) {
          finalNewValue = Number(newValue);
        } else {
          finalNewValue = `${newValue}`;
        }
      }
      setValue(finalNewValue);

      onChange?.(finalNewValue);
    },
    [onChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <ControlItemTextField type='number' value={value} onChange={handleChange} {...props} />;
};

export default ControlItemNumber;
