import React, { useState } from 'react';
import { Buttons_PdgIconButtonProps as Props } from './Buttons_PdgIconButton.types';
import {
  Code,
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
} from '@ccomp';
import { PdgIconButton } from '../../../../../src';

export const Buttons_PdgIconButton: React.FC<Props> = () => {
  const [size, setSize] = useState<ControlItemSizeProps['value']>();
  const [iconSize, setIconSize] = useState<ControlItemIconSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [disabled, setDisabled] = useState<ControlItemDisabledProps['value']>();
  const [disableFocusRipple, setDisableFocusRipple] = useState<ControlItemDisableFocusRippleProps['value']>();
  const [edge, setEdge] = useState<ControlItemEdgeProps['value']>();
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemSize value={size} onChange={setSize} />
          <ControlItemIconSize
            label='iconSize'
            helperText='아이콘 크기 (지정하지 않으면, size 에 맞게 자동 조정)'
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
      </ControlBar>

      <PdgIconButton
        size={size}
        iconSize={iconSize}
        color={color}
        disabled={disabled}
        disableFocusRipple={disableFocusRipple}
        edge={edge}
      >
        {icon}
      </PdgIconButton>

      <Code
        name='PdgIconButton'
        content='AddCircle'
        props={{ size, iconSize, color, disabled, disableFocusRipple, edge }}
      />
    </div>
  );
};

export type TButtons_PdgIconButton = typeof Buttons_PdgIconButton;

export default Buttons_PdgIconButton;
