import React, { useMemo } from 'react';
import { ControlItemIconSizeProps as Props } from './ControlItemIconSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';
import { ifUndefined } from '@pdg/util';

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
      label={ifUndefined(label, 'size')}
      items={items}
      helperText={ifUndefined(helperText, '크기')}
      {...props}
    />
  );
};

export type TControlItemIconSize = typeof ControlItemIconSize;

export default ControlItemIconSize;
