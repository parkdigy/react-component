import React, { useMemo } from 'react';
import { ControlBarRowHelperProps as Props } from './ControlBarRowHelper.types';
import { ControlBarRow, ControlItemButtonGroup, ControlItemIcon, ControlItemOpacity, ControlItemText } from '@ccomp';

export const ControlBarRowHelper: React.FC<Props> = ({
  text,
  position,
  opacity,
  tooltipPlacement,
  icon,
  onChangeText,
  onChangePosition,
  onChangeOpacity,
  onChangeTooltipPlacement,
  onChangeIcon,
}) => {
  const positionItems = useMemo(() => ['left', 'right'] as const, []);

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
      <ControlItemText label='헬퍼 텍스트' helperText='helper.text' value={text} onChange={onChangeText} />
      <ControlItemButtonGroup
        disabled={empty(text)}
        items={positionItems}
        label='헬퍼 위치'
        helperText='helper.position'
        value={position}
        onChange={onChangePosition}
      />
      <ControlItemOpacity
        disabled={empty(text)}
        label='헬퍼 투명도'
        helperText='helper.opacity'
        value={opacity}
        onChange={onChangeOpacity}
      />
      <ControlItemButtonGroup
        disabled={empty(text)}
        items={tooltipPlacementItems}
        label='헬퍼 툴팁 위치'
        helperText='helper.tooltipPlacement'
        value={tooltipPlacement}
        onChange={onChangeTooltipPlacement}
      />
      <ControlItemIcon
        disabled={empty(text)}
        label='헬퍼 아이콘'
        helperText='helper.icon'
        value={icon}
        onChange={onChangeIcon}
      />
    </ControlBarRow>
  );
};

export type TControlBarRowHelper = typeof ControlBarRowHelper;

export default ControlBarRowHelper;
