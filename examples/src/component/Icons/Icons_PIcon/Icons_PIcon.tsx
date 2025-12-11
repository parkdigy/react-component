import React, { useState } from 'react';
import { Icons_PIconProps as Props } from './Icons_PIcon.types';
import { PIcon, PReactCode } from '../../../../../src';
import {
  ControlItemColorProps,
  ControlBar,
  ControlItemColor,
  ControlItemIcon,
  ControlItemIconProps,
  ControlItemIconSize,
  ControlItemIconSizeProps,
  ControlBarRow,
  ControlBarRowTooltip,
  ControlBarRowTooltipProps,
  ControlBarRowDivider,
} from '@ccomp';

export const Icons_PIcon: React.FC<Props> = () => {
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();
  const [size, setSize] = useState<ControlItemIconSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [tooltip, setTooltip] = useState<ControlBarRowTooltipProps['tooltip']>();
  const [tooltipPlacement, setTooltipPlacement] = useState<ControlBarRowTooltipProps['tooltipPlacement']>();

  return (
    <div>
      <div>
        <a href='https://mui.com/material-ui/material-icons/' target='_blank'>
          아이콘 검색
        </a>
      </div>

      <ControlBar mt={1}>
        <ControlBarRow>
          <ControlItemIconSize value={size} onChange={setSize} />
          <ControlItemColor value={color} onChange={setColor} />
        </ControlBarRow>
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

      <PIcon size={size} color={color} tooltip={tooltip} tooltipPlacement={tooltipPlacement}>
        {icon}
      </PIcon>

      <PReactCode name='PIcon' content='AddCircle' props={{ size, color, tooltip, tooltipPlacement }} />
    </div>
  );
};

export type TIcons_PIcon = typeof Icons_PIcon;

export default Icons_PIcon;
