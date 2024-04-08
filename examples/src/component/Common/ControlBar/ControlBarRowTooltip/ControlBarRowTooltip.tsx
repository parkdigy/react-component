import React, { useMemo } from 'react';
import { ControlBarRowTooltipProps as Props } from './ControlBarRowTooltip.types';
import { ControlBarRow, ControlItemButtonGroup, ControlItemText } from '@ccomp';

export const ControlBarRowTooltip: React.FC<Props> = ({
  tooltip,
  tooltipPlacement,
  onChangeTooltip,
  onChangeTooltipPlacement,
}) => {
  const tooltipPlacementItems = useMemo(
    () =>
      [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ] as const,
    []
  );

  return (
    <ControlBarRow>
      <ControlItemText label='툴팁 텍스트' helperText='tooltip' value={tooltip} onChange={onChangeTooltip} />
      <ControlItemButtonGroup
        disabled={empty(tooltip)}
        items={tooltipPlacementItems}
        label='툴팁 위치'
        helperText='tooltipPlacement'
        value={tooltipPlacement}
        onChange={onChangeTooltipPlacement}
      />
    </ControlBarRow>
  );
};

export type TControlBarRowTooltip = typeof ControlBarRowTooltip;

export default ControlBarRowTooltip;
