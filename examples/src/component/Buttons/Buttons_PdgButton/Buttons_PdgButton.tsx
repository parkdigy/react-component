import React, { useState } from 'react';
import { Buttons_PdgButtonProps as Props } from './Buttons_PdgButton.types';
import {
  Code,
  ControlItemColor,
  ControlItemColorProps,
  ControlBar,
  ControlItemDisabled,
  ControlItemDisabledProps,
  ControlItemDisableFocusRipple,
  ControlItemIcon,
  ControlItemIconProps,
  ControlItemSize,
  ControlItemSizeProps,
  ControlItemVariant,
  ControlItemVariantProps,
  ControlItemDisableFocusRippleProps,
  ControlBarRow,
  ControlItemTextProps,
  ControlItemText,
} from '@ccomp';
import { PdgButton } from '../../../../../src';

export const Buttons_PdgButton: React.FC<Props> = () => {
  const [label, setLabel] = useState<ControlItemTextProps['value']>('버튼');
  const [variant, setVariant] = useState<ControlItemVariantProps['value']>();
  const [size, setSize] = useState<ControlItemSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [disabled, setDisabled] = useState<ControlItemDisabledProps['value']>();
  const [disableFocusRipple, setDisableFocusRipple] = useState<ControlItemDisableFocusRippleProps['value']>();
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();
  const [endIcon, setEndIcon] = useState<ControlItemIconProps['value']>();

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='label' helperText='레이블' value={label} onChange={setLabel} />
          <ControlItemVariant value={variant} onChange={setVariant} />
          <ControlItemSize value={size} onChange={setSize} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemColor value={color} onChange={setColor} />
          <ControlItemDisabled value={disabled} onChange={setDisabled} />
          <ControlItemDisableFocusRipple value={disableFocusRipple} onChange={setDisableFocusRipple} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemIcon label='icon, startIcon' helperText='시작 아이콘' value={icon} onChange={setIcon} />
          <ControlItemIcon label='endIcon' helperText='끝 아이콘' value={endIcon} onChange={setEndIcon} />
        </ControlBarRow>
      </ControlBar>

      <PdgButton
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        icon={icon}
        endIcon={endIcon}
        disableFocusRipple={disableFocusRipple}
      >
        {label}
      </PdgButton>

      <Code
        name='PdgButton'
        content={label}
        props={{ variant, size, color, disabled, disableFocusRipple, icon, endIcon }}
      />
    </div>
  );
};

export type TButtons_PdgButton = typeof Buttons_PdgButton;

export default Buttons_PdgButton;
