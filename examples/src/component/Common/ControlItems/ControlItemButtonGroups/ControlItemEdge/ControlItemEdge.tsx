import React, { useMemo } from 'react';
import { ControlItemEdgeProps as Props } from './ControlItemEdge.types';
import ControlItemButtonGroup from '../ControlItemButtonGroup';

export const ControlItemEdge: React.FC<Props> = (props) => {
  const items = useMemo(
    () =>
      (['start', 'end'] as const).map((v) => ({
        label: v,
        value: v,
      })),
    []
  );

  return <ControlItemButtonGroup label='edge' items={items} helperText='마진 조정' {...props} />;
};

export type TControlItemEdge = typeof ControlItemEdge;

export default ControlItemEdge;
