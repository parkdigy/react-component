import React from 'react';
import { ControlBarRowTooltipProps as Props } from './ControlBarRowTooltip.types';
import { ControlBarRow, ControlItemButtonGroup, ControlItemText } from '@ccomp';

const TooltipPlacementItems = [
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
] as const;

export const ControlBarRowTooltip = ({
  tooltip,
  tooltipPlacement,
  onChangeTooltip,
  onChangeTooltipPlacement,
}: Props) => {
  return (
    <ControlBarRow>
      <ControlItemText label='툴팁 텍스트' helperText='tooltip' value={tooltip} onChange={onChangeTooltip} />
      <ControlItemButtonGroup
        disabled={empty(tooltip)}
        items={TooltipPlacementItems}
        label='툴팁 위치'
        helperText='tooltipPlacement'
        value={tooltipPlacement}
        onChange={onChangeTooltipPlacement}
      />
    </ControlBarRow>
  );
};

export default ControlBarRowTooltip;
