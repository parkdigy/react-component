import React, { useMemo } from 'react';
import { ControlItemFontSizeProps as Props } from './ControlItemFontSize.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

export const ControlItemFontSize: React.FC<Props> = (props) => {
  const items = useMemo(
    () =>
      (['inherit', 'small', 'medium', 'large', 50, 100] as const).map((v) => ({
        label: `${v}`,
        value: v,
      })),
    []
  );

  return <ControlItemButtonGroup label='size' items={items} helperText='크기' {...props} />;
};

export type TControlItemFontSize = typeof ControlItemFontSize;

export default ControlItemFontSize;
