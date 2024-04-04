import React, { useState } from 'react';
import { Icons_PdgIconProps as Props } from './Icons_PdgIcon.types';
import { PdgIcon } from '../../../../../src';
import {
  Code,
  ControlItemColorProps,
  ControlBar,
  ControlItemColor,
  ControlItemIcon,
  ControlItemIconProps,
  ControlItemIconSize,
  ControlItemIconSizeProps,
  ControlBarRow,
} from '@ccomp';

export const Icons_PdgIcon: React.FC<Props> = () => {
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();
  const [size, setSize] = useState<ControlItemIconSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();

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
      </ControlBar>

      <PdgIcon size={size} color={color}>
        {icon}
      </PdgIcon>

      <Code name='PdgIcon' content='AddCircle' props={{ size, color }} />
    </div>
  );
};

export type TIcons_PdgIcon = typeof Icons_PdgIcon;

export default Icons_PdgIcon;
