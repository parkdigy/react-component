import React, { useMemo } from 'react';
import { ControlItemIconProps as Props } from './ControlItemIcon.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/compare';

export const ControlItemIcon: React.FC<Props> = ({ label, helperText, ...props }) => {
  const items = useMemo(
    () =>
      (['AccountCircle', 'Add', 'AddCircle', 'AddToQueue', 'Apartment'] as const).map((v) => ({
        label: v,
        value: v,
      })),
    []
  );

  return (
    <ControlItemButtonGroup
      label={ifUndefined(label, '아이콘')}
      helperText={ifUndefined(helperText, 'icon')}
      items={items}
      {...props}
    />
  );
};

export type TControlItemIcon = typeof ControlItemIcon;

export default ControlItemIcon;
