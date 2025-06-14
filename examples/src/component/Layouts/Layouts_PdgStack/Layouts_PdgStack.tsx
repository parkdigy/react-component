import React, { useState } from 'react';
import { Layouts_PdgStackProps as Props } from './Layouts_PdgStack.types';
import { PdgStack, PdgReactCode } from '../../../../../src';
import {
  ControlBar,
  ControlBarRow,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemSpacing,
  ControlItemSpacingProps,
} from '@ccomp';

export const Layouts_PdgStack: React.FC<Props> = () => {
  const [spacing, setSpacing] = useState<ControlItemSpacingProps['value']>();
  const [row, setRow] = useState<ControlItemOnOffProps['value']>();
  const [wrap, setWrap] = useState<ControlItemOnOffProps['value']>();
  const [center, setCenter] = useState<ControlItemOnOffProps['value']>();
  const [centerJustifyContent, setCenterJustifyContent] = useState<ControlItemOnOffProps['value']>();

  return (
    <div>
      <ControlBar mt={1}>
        <ControlBarRow>
          <ControlItemOnOff label='Row' helperText='row' value={row} onChange={setRow} />
          <ControlItemSpacing value={spacing} onChange={setSpacing} />
          <ControlItemOnOff label='Wrap' helperText='wrap' value={wrap} onChange={setWrap} />
          <ControlItemOnOff label='중앙 정렬' helperText='center' value={center} onChange={setCenter} />
          <ControlItemOnOff
            label='반대축 중앙 정렬'
            helperText='centerJustifyContent'
            value={centerJustifyContent}
            onChange={setCenterJustifyContent}
          />
        </ControlBarRow>
      </ControlBar>

      <PdgStack row={row} spacing={spacing} wrap={wrap} center={center} centerJustifyContent={centerJustifyContent}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{ backgroundColor: '#efefef', padding: '5px 10px', height: 30 + (i % 2 === 0 ? 10 : 0) }}>
            Item {i + 1}
          </div>
        ))}
      </PdgStack>

      <PdgReactCode name='PdgStack' content='...' props={{ row, spacing, wrap, center, centerJustifyContent }} />
    </div>
  );
};

export type TLayouts_PdgStack = typeof Layouts_PdgStack;

export default Layouts_PdgStack;
