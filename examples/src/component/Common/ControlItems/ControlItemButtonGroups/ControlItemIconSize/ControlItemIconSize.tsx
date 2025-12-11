import React, { useMemo } from 'react';
import { ControlItemIconSizeProps as Props } from './ControlItemIconSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/compare';

export const ControlItemIconSize: React.FC<Props> = ({ label, helperText, ...props }) => {
  const items = useMemo(
    () =>
      (['small', 'medium', 'large', 50, 100] as const).map((v) => ({
        label: `${v}`,
        value: v,
      })),
    []
  );

  return (
    <ControlItemButtonGroup
      label={ifUndefined(label, '크기')}
      helperText={ifUndefined(helperText, 'size')}
      items={items}
      {...props}
    />
  );
};

export type TControlItemIconSize = typeof ControlItemIconSize;

export default ControlItemIconSize;
