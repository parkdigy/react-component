import React, { useState } from 'react';
import { Layouts_PFlexColumnBoxProps as Props } from './Layouts_PFlexColumnBox.types';
import { PFlexColumnBox, PReactCode } from '../../../../../src';
import {
  ControlBar,
  ControlBarRow,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemSpacing,
  ControlItemSpacingProps,
} from '@ccomp';

export const Layouts_PFlexColumnBox = ({}: Props) => {
  const [spacing, setSpacing] = useState<ControlItemSpacingProps['value']>();
  const [center, setCenter] = useState<ControlItemOnOffProps['value']>();

  return (
    <div>
      <ControlBar mt={1}>
        <ControlBarRow>
          <ControlItemSpacing value={spacing} onChange={setSpacing} />
          <ControlItemOnOff label='중앙 정렬' helperText='center' value={center} onChange={setCenter} />
        </ControlBarRow>
      </ControlBar>

      <PFlexColumnBox spacing={spacing ? Number(spacing) : spacing} center={center}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ backgroundColor: '#efefef', padding: '5px 10px' }}>
            Item {i + 1}
          </div>
        ))}
      </PFlexColumnBox>

      <PReactCode name='PFlexColumnBox' content='...' props={{ spacing, center }} />
    </div>
  );
};

export default Layouts_PFlexColumnBox;
