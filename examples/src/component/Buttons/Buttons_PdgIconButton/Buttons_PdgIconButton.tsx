import React, { useState } from 'react';
import { Buttons_PdgIconButtonProps as Props } from './Buttons_PdgIconButton.types';
import {
  ControlItemColor,
  ControlItemColorProps,
  ControlBar,
  ControlItemDisabled,
  ControlItemDisabledProps,
  ControlItemDisableFocusRipple,
  ControlItemEdge,
  ControlItemEdgeProps,
  ControlItemIcon,
  ControlItemIconProps,
  ControlItemSize,
  ControlItemSizeProps,
  ControlItemDisableFocusRippleProps,
  ControlBarRow,
  ControlItemIconSizeProps,
  ControlItemIconSize,
  ControlBarRowTooltip,
  ControlBarRowTooltipProps,
  ControlBarRowDivider,
} from '@ccomp';
import { PdgIconButton, PdgReactCode } from '../../../../../src';

export const Buttons_PdgIconButton: React.FC<Props> = () => {
  const [size, setSize] = useState<ControlItemSizeProps['value']>();
  const [iconSize, setIconSize] = useState<ControlItemIconSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [disabled, setDisabled] = useState<ControlItemDisabledProps['value']>();
  const [disableFocusRipple, setDisableFocusRipple] = useState<ControlItemDisableFocusRippleProps['value']>();
  const [edge, setEdge] = useState<ControlItemEdgeProps['value']>();
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();
  const [tooltip, setTooltip] = useState<ControlBarRowTooltipProps['tooltip']>();
  const [tooltipPlacement, setTooltipPlacement] = useState<ControlBarRowTooltipProps['tooltipPlacement']>();

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemSize value={size} onChange={setSize} />
          <ControlItemIconSize
            label='아이콘 크기 (지정하지 않으면, size 에 맞게 자동 조정)'
            helperText='iconSize'
            value={iconSize}
            onChange={setIconSize}
          />
          <ControlItemColor value={color} onChange={setColor} />
        </ControlBarRow>
        <ControlItemDisabled value={disabled} onChange={setDisabled} />
        <ControlItemDisableFocusRipple value={disableFocusRipple} onChange={setDisableFocusRipple} />
        <ControlItemEdge value={edge} onChange={setEdge} />
        <ControlBarRow>
          <ControlItemIcon required value={icon} onChange={setIcon} />
        </ControlBarRow>
        <ControlBarRowDivider />
        <ControlBarRowTooltip
          tooltip={tooltip}
          tooltipPlacement={tooltipPlacement}
          onChangeTooltip={setTooltip}
          onChangeTooltipPlacement={setTooltipPlacement}
        />
      </ControlBar>

      <PdgIconButton
        size={size}
        iconSize={iconSize}
        color={color}
        disabled={disabled}
        disableFocusRipple={disableFocusRipple}
        edge={edge}
        tooltip={tooltip}
        tooltipPlacement={tooltipPlacement}
      >
        {icon}
      </PdgIconButton>

      <PdgReactCode
        name='PdgIconButton'
        content='AddCircle'
        props={{ size, iconSize, color, disabled, disableFocusRipple, edge, tooltip, tooltipPlacement }}
      />
    </div>
  );
};

export type TButtons_PdgIconButton = typeof Buttons_PdgIconButton;

export default Buttons_PdgIconButton;
