import React, { useState } from 'react';
import { Buttons_PButtonProps as Props } from './Buttons_PButton.types';
import {
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
  ControlBarRowTooltipProps,
  ControlBarRowTooltip,
  ControlBarRowDivider,
  ControlItemOnOffProps,
  ControlItemOnOff,
} from '@ccomp';
import { PButton, PReactCode } from '../../../../../src';

export const Buttons_PButton: React.FC<Props> = () => {
  const [label, setLabel] = useState<ControlItemTextProps['value']>('버튼');
  const [variant, setVariant] = useState<ControlItemVariantProps['value']>();
  const [size, setSize] = useState<ControlItemSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [disabled, setDisabled] = useState<ControlItemDisabledProps['value']>();
  const [disableFocusRipple, setDisableFocusRipple] = useState<ControlItemDisableFocusRippleProps['value']>();
  const [startIcon, setStartIcon] = useState<ControlItemIconProps['value']>();
  const [endIcon, setEndIcon] = useState<ControlItemIconProps['value']>();
  const [tooltip, setTooltip] = useState<ControlBarRowTooltipProps['tooltip']>();
  const [tooltipPlacement, setTooltipPlacement] = useState<ControlBarRowTooltipProps['tooltipPlacement']>();
  const [fullWidth, setFullWidth] = useState<ControlItemOnOffProps['value']>();

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='레이블' helperText='label' value={label} onChange={setLabel} />
          <ControlItemVariant value={variant} onChange={setVariant} />
          <ControlItemSize value={size} onChange={setSize} />
          <ControlItemOnOff label='fullWidth' helperText='최대 넓이' value={fullWidth} onChange={setFullWidth} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemColor value={color} onChange={setColor} />
          <ControlItemDisabled value={disabled} onChange={setDisabled} />
          <ControlItemDisableFocusRipple value={disableFocusRipple} onChange={setDisableFocusRipple} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemIcon label='시작 아이콘' helperText='startIcon' value={startIcon} onChange={setStartIcon} />
          <ControlItemIcon label='끝 아이콘' helperText='endIcon' value={endIcon} onChange={setEndIcon} />
        </ControlBarRow>
        <ControlBarRowDivider />
        <ControlBarRowTooltip
          tooltip={tooltip}
          tooltipPlacement={tooltipPlacement}
          onChangeTooltip={setTooltip}
          onChangeTooltipPlacement={setTooltipPlacement}
        />
      </ControlBar>

      <PButton
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        disableFocusRipple={disableFocusRipple}
        tooltip={tooltip}
        tooltipPlacement={tooltipPlacement}
        fullWidth={fullWidth}
      >
        {label}
      </PButton>

      <PReactCode
        name='PButton'
        content={label}
        props={{ variant, size, color, disabled, disableFocusRipple, startIcon, endIcon, tooltip, tooltipPlacement }}
      />
    </div>
  );
};

export type TButtons_PButton = typeof Buttons_PButton;

export default Buttons_PButton;
