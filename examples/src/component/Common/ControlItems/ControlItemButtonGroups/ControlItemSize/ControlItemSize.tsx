import React, { useMemo } from 'react';
import { ControlItemSizeProps as Props } from './ControlItemSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

export const ControlItemSize: React.FC<Props> = (props) => {
  const items = useMemo(
    () =>
      (['small', 'medium', 'large'] as const).map((v) => ({
        label: `${v}`,
        value: v,
      })),
    []
  );

  return <ControlItemButtonGroup label='size' items={items} helperText='크기' {...props} />;
};

export type TControlItemSize = typeof ControlItemSize;

export default ControlItemSize;
