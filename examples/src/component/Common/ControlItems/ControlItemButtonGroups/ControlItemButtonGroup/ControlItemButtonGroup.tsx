import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ControlItemButtonGroupProps as Props, ControlItemButtonGroupValue } from './ControlItemButtonGroup.types';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ControlItemBase from '../../ControlItemBase';
import dayjs from 'dayjs';
import { useAutoUpdateRef } from '@pdg/react-hook';

export function ControlItemButtonGroup<T extends ControlItemButtonGroupValue>({
  label,
  items: initItems,
  helperText,
  required,
  disabled,
  value: initValue,
  onChange,
}: Props<T>) {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const items = useMemo(
    () =>
      initItems.map<{ label: string; value: T }>((v) =>
        typeof v === 'string' || typeof v === 'number'
          ? lv(`${v}`, v)
          : typeof v === 'boolean'
            ? lv(v ? 'true' : 'false', v)
            : v instanceof Date
              ? lv('Date', v)
              : dayjs.isDayjs(v)
                ? lv('Dayjs', v)
                : v
      ),
    [initItems]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value: T | undefined): T | '' => {
      return value ?? (required && items.length > 0 ? items[0].value : '');
    },
    [items, required]
  );

  const [value, setValue] = useState(getFinalValue(initValue));
  const [prevInitValue, setPrevInitValue] = useState(initValue);
  if (initValue !== prevInitValue) {
    setPrevInitValue(initValue);
    setValue(getFinalValue(initValue));
  }

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const onChangeRef = useAutoUpdateRef(onChange);
  const lastOnChangeValueRef = useRef(initValue);

  useEffect(() => {
    const onChangeValue = value === '' ? undefined : value;
    if (onChangeRef.current && onChangeValue !== lastOnChangeValueRef.current) {
      lastOnChangeValueRef.current = onChangeValue;
      onChangeRef.current(onChangeValue);
    }
  }, [value, onChangeRef]);

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
        onChange={(_, newValue) => {
          const nextValue = newValue == null ? value : newValue;
          setValue(nextValue);
          onChange?.(nextValue === '' ? undefined : nextValue);
        }}
      >
        {!required && <ToggleButton value=''>none</ToggleButton>}
        {items.map(({ label, value }, idx) => (
          <ToggleButton key={idx} value={value} color='primary'>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ControlItemBase>
  );
}

export default ControlItemButtonGroup;
