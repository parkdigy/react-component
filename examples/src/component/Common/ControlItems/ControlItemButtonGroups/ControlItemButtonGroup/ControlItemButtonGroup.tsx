import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ControlItemButtonGroupProps as Props, ControlItemButtonGroupValue } from './ControlItemButtonGroup.types';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ControlItemBase from '../../ControlItemBase';
import dayjs from 'dayjs';

export function ControlItemButtonGroup<T extends ControlItemButtonGroupValue>({
  label,
  items,
  helperText,
  required,
  disabled,
  value: initValue,
  onChange,
}: Props<T>) {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const finalItems = useMemo(
    () =>
      items.map<{ label: string; value: T }>((v) =>
        typeof v === 'string' || typeof v === 'number'
          ? { label: `${v}`, value: v }
          : typeof v === 'boolean'
            ? { label: v ? 'true' : 'false', value: v }
            : v instanceof Date
              ? { label: 'Date', value: v }
              : dayjs.isDayjs(v)
                ? { label: 'Dayjs', value: v }
                : v
      ),
    [items]
  );

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value: T | undefined): T | '' => {
      if (required) {
        if (value === undefined) {
          const newValue = finalItems[0];
          if (typeof newValue === 'string' || typeof newValue === 'number' || typeof newValue === 'boolean') {
            return newValue;
          } else if (newValue instanceof Date || dayjs.isDayjs(newValue)) {
            return newValue as unknown as T;
          } else {
            return newValue.value;
          }
        }
      } else if (value === undefined) {
        return '';
      }
      return value;
    },
    [finalItems, required]
  );

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState<T | ''>(getFinalValue(initValue));

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setValue(getFinalValue(initValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initValue]);

  useEffect(() => {
    onChange && onChange(value === '' ? undefined : value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ControlItemBase label={label} helperText={helperText} disabled={disabled}>
      <ToggleButtonGroup
        exclusive
        size='small'
        value={value}
        disabled={disabled}
        onChange={(e, newValue) => {
          newValue = newValue == null ? value : newValue;
          setValue(newValue);
        }}
      >
        {!required && <ToggleButton value=''>none</ToggleButton>}
        {finalItems.map(({ label, value }, idx) => (
          <ToggleButton key={idx} value={value} color='primary'>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ControlItemBase>
  );
}

export default ControlItemButtonGroup;
