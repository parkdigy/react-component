import React, { useMemo } from 'react';
import { ControlItemOpacityProps as Props } from './ControlItemOpacity.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/compare';

export const ControlItemOpacity: React.FC<Props> = ({ label, helperText, ...props }) => {
  const items = useMemo(
    () =>
      [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((v) => ({
        label: `${v === 0 ? '0.0' : v === 1 ? '1.0' : v}`,
        value: v,
      })),
    []
  );

  return (
    <ControlItemButtonGroup
      label={ifUndefined(label, '투명도')}
      helperText={ifUndefined(helperText, 'opacity')}
      items={items}
      {...props}
    />
  );
};

export type TControlItemOpacity = typeof ControlItemOpacity;

export default ControlItemOpacity;
