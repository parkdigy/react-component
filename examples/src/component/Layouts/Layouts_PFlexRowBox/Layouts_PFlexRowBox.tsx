import React, { useState } from 'react';
import { Layouts_PFlexRowBoxProps as Props } from './Layouts_PFlexRowBox.types';
import { PFlexRowBox, PReactCode } from '../../../../../src';
import {
  ControlBar,
  ControlBarRow,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemSpacing,
  ControlItemSpacingProps,
} from '@ccomp';

export const Layouts_PFlexRowBox = ({}: Props) => {
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

      <PFlexRowBox spacing={spacing} nowrap={nowrap} center={center}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{ backgroundColor: '#efefef', padding: '5px 10px', height: 30 + (i % 2 === 0 ? 10 : 0) }}>
            Item {i + 1}
          </div>
        ))}
      </PFlexRowBox>

      <PReactCode name='PFlexRowBox' content='...' props={{ spacing, nowrap, center }} />
    </div>
  );
};

export default Layouts_PFlexRowBox;
