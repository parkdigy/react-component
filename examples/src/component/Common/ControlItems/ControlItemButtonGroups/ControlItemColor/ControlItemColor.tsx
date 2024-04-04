import React, { useMemo } from 'react';
import { ControlItemColorProps as Props } from './ControlItemColor.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

export const ControlItemColor: React.FC<Props> = (props) => {
  const items = useMemo(
    () =>
      (['primary', 'secondary', 'info', 'success', 'error', 'warning'] as const).map((v) => ({
        label: v,
        value: v,
      })),
    []
  );

  return <ControlItemButtonGroup label='color' items={items} helperText='색상' {...props} />;
};

export type TControlItemColor = typeof ControlItemColor;

export default ControlItemColor;
