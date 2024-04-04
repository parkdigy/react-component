import React, { useMemo } from 'react';
import { ControlItemIconProps as Props } from './ControlItemIcon.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/util';

export const ControlItemIcon: React.FC<Props> = ({ label, helperText, ...props }) => {
  const items = useMemo(
    () =>
      (['AccountCircle', 'AddCircle', 'AddToQueue', 'Apartment'] as const).map((v) => ({
        label: v,
        value: v,
      })),
    []
  );

  return (
    <ControlItemButtonGroup
      label={ifUndefined(label, 'icon')}
      items={items}
      helperText={ifUndefined(helperText, '아이콘')}
      {...props}
    />
  );
};

export type TControlItemIcon = typeof ControlItemIcon;

export default ControlItemIcon;
