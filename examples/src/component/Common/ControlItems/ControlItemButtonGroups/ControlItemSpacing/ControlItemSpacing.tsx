import React, { useMemo } from 'react';
import { ControlItemSpacingProps as Props } from './ControlItemSpacing.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/compare';

export const ControlItemSpacing: React.FC<Props> = ({ label, helperText, ...props }) => {
  const items = useMemo(
    () =>
      ([0.5, 1.0, 2.0, 3.0] as const).map((v) => ({
        label: `${v}`,
        value: v,
      })),
    []
  );

  return (
    <ControlItemButtonGroup
      label={ifUndefined(label, '간격')}
      helperText={ifUndefined(helperText, 'spacing')}
      items={items}
      {...props}
    />
  );
};

export type TControlItemSpacing = typeof ControlItemSpacing;

export default ControlItemSpacing;
