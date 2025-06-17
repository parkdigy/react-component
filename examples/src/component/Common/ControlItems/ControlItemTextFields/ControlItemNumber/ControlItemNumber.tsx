import React, { useCallback, useEffect, useState } from 'react';
import ControlItemTextField from '../ControlItemTextField';
import { ControlItemNumberProps as Props } from './ControlItemNumber.types';
import { isNumericText } from '@pdg/compare';

export const ControlItemNumber: React.FC<Props> = ({ value: initValue, onChange, ...props }) => {
  const [value, setValue] = useState<Props['value']>(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const handleChange = useCallback(
    (newValue: unknown) => {
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
      onChange && onChange(finalNewValue);
    },
    [onChange]
  );

  return <ControlItemTextField type='number' value={value} onChange={handleChange} {...props} />;
};

export type TControlItemNumber = typeof ControlItemNumber;

export default ControlItemNumber;
