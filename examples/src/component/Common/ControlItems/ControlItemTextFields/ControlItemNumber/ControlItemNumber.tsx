import React, { useState } from 'react';
import ControlItemTextField from '../ControlItemTextField';
import { ControlItemNumberProps as Props } from './ControlItemNumber.types';
import { isNumericText } from '@pdg/compare';

export const ControlItemNumber = ({ value: initValue, onChange, ...props }: Props) => {
  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [prevInitValue, setPrevInitValue] = useState(initValue);
  const [value, setValue] = useState(initValue);

  let finalValue = value;
  if (initValue !== prevInitValue) {
    setPrevInitValue(initValue);
    finalValue = initValue;
    setValue(finalValue);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = (newValue: any) => {
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
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <ControlItemTextField type='number' value={finalValue} onChange={handleChange} {...props} />;
};

export default ControlItemNumber;
