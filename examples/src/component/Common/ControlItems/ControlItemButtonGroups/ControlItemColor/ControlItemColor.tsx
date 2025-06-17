import React, { useMemo } from 'react';
import { ControlItemColorProps as Props } from './ControlItemColor.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/compare';

export const ControlItemColor: React.FC<Props> = ({ label, helperText, ...props }) => {
  const items = useMemo(
    () =>
      (['primary', 'secondary', 'info', 'success', 'error', 'warning', '#aabbcc'] as const).map((v) => ({
        label: v,
        value: v,
      })),
    []
  );

  return (
    <ControlItemButtonGroup
      label={ifUndefined(label, '색상')}
      helperText={ifUndefined(helperText, 'color')}
      items={items}
      {...props}
    />
  );
};

export type TControlItemColor = typeof ControlItemColor;

export default ControlItemColor;
