import React, { useMemo } from 'react';
import { ControlItemOnOffProps as Props } from './ControlItemOnOff.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

export const ControlItemOnOff: React.FC<Props> = (props) => {
  const items = useMemo(
    () =>
      [true, false].map((v) => ({
        label: v ? 'true' : 'false',
        value: v,
      })),
    []
  );

  return <ControlItemButtonGroup items={items} {...props} />;
};

export type TControlItemOnOff = typeof ControlItemOnOff;

export default ControlItemOnOff;
