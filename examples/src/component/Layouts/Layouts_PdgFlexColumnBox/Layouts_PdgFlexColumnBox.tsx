import React, { useState } from 'react';
import { Layouts_PdgFlexColumnBoxProps as Props } from './Layouts_PdgFlexColumnBox.types';
import { PdgFlexColumnBox, PdgReactCode } from '../../../../../src';
import {
  ControlBar,
  ControlBarRow,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemSpacing,
  ControlItemSpacingProps,
} from '@ccomp';

export const Layouts_PdgFlexColumnBox: React.FC<Props> = () => {
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

      <PdgFlexColumnBox spacing={spacing ? Number(spacing) : spacing} center={center}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ backgroundColor: '#efefef', padding: '5px 10px' }}>
            Item {i + 1}
          </div>
        ))}
      </PdgFlexColumnBox>

      <PdgReactCode name='PdgFlexColumnBox' content='...' props={{ spacing, center }} />
    </div>
  );
};

export type TLayouts_PdgFlexColumnBox = typeof Layouts_PdgFlexColumnBox;

export default Layouts_PdgFlexColumnBox;
