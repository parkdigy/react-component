import React, { useMemo } from 'react';
import { ControlItemVariantProps as Props } from './ControlItemVariant.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

export const ControlItemVariant: React.FC<Props> = (props) => {
  const items = useMemo(
    () =>
      (['contained', 'outlined', 'text'] as const).map((v) => ({
        label: `${v}`,
        value: v,
      })),
    []
  );

  return <ControlItemButtonGroup label='variant' items={items} helperText='버튼 모양' {...props} />;
};

export type TControlItemVariant = typeof ControlItemVariant;

export default ControlItemVariant;
