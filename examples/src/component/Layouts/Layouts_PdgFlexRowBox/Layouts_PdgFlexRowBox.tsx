import React, { useState } from 'react';
import { Layouts_PdgFlexRowBoxProps as Props } from './Layouts_PdgFlexRowBox.types';
import { PdgFlexRowBox, PdgReactCode } from '../../../../../src';
import {
  ControlBar,
  ControlBarRow,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemSpacing,
  ControlItemSpacingProps,
} from '@ccomp';

export const Layouts_PdgFlexRowBox: React.FC<Props> = () => {
  const [spacing, setSpacing] = useState<ControlItemSpacingProps['value']>();
  const [nowrap, setNowrap] = useState<ControlItemOnOffProps['value']>();
  const [center, setCenter] = useState<ControlItemOnOffProps['value']>();

  return (
    <div>
      <ControlBar mt={1}>
        <ControlBarRow>
          <ControlItemSpacing value={spacing} onChange={setSpacing} />
          <ControlItemOnOff label='No Wrap' helperText='nowrap' value={nowrap} onChange={setNowrap} />
          <ControlItemOnOff label='중앙 정렬' helperText='center' value={center} onChange={setCenter} />
        </ControlBarRow>
      </ControlBar>

      <PdgFlexRowBox spacing={spacing} nowrap={nowrap} center={center}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{ backgroundColor: '#efefef', padding: '5px 10px', height: 30 + (i % 2 === 0 ? 10 : 0) }}>
            Item {i + 1}
          </div>
        ))}
      </PdgFlexRowBox>

      <PdgReactCode name='PdgFlexRowBox' content='...' props={{ spacing, nowrap, center }} />
    </div>
  );
};

export type TLayouts_PdgFlexRowBox = typeof Layouts_PdgFlexRowBox;

export default Layouts_PdgFlexRowBox;
