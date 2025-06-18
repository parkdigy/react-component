import React, { useMemo, useState } from 'react';
import { Texts_PBusinessNoTextProps as Props } from './Texts_PBusinessNoText.types';
import {
  ControlBar,
  ControlBarRow,
  ControlBarRowDivider,
  ControlBarRowHelper,
  ControlBarRowHelperProps,
  ControlItemColor,
  ControlItemColorProps,
  ControlItemFontSize,
  ControlItemFontSizeProps,
  ControlItemText,
  ControlItemTextProps,
} from '@ccomp';
import { PBusinessNoText, PReactCode } from '../../../../../src';

export const Texts_PBusinessNoText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemTextProps['value']>('0101234567');
  const [size, setSize] = useState<ControlItemFontSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [helperText, setHelperText] = useState<ControlBarRowHelperProps['text']>();
  const [helperPosition, setHelperPosition] = useState<ControlBarRowHelperProps['position']>();
  const [helperOpacity, setHelperOpacity] = useState<ControlBarRowHelperProps['opacity']>();
  const [helperTooltipPlacement, setHelperTooltipPlacement] = useState<ControlBarRowHelperProps['tooltipPlacement']>();
  const [helperIcon, setHelperIcon] = useState<ControlBarRowHelperProps['icon']>();

  const finalValue = useMemo(() => (empty(value) ? undefined : value), [value]);

  const helperProps = useMemo(
    () =>
      notEmpty(helperText)
        ? {
            text: helperText,
            position: helperPosition,
            opacity: helperOpacity,
            tooltipPlacement: helperTooltipPlacement,
            icon: helperIcon,
          }
        : undefined,
    [helperIcon, helperOpacity, helperPosition, helperText, helperTooltipPlacement]
  );

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='값 (문자)' helperText='value' value={value} onChange={setValue} />
          <ControlItemFontSize value={size} onChange={setSize} />
          <ControlItemColor value={color} onChange={setColor} />
        </ControlBarRow>
        <ControlBarRowDivider />
        <ControlBarRowHelper
          text={helperText}
          position={helperPosition}
          opacity={helperOpacity}
          tooltipPlacement={helperTooltipPlacement}
          icon={helperIcon}
          onChangeText={setHelperText}
          onChangePosition={setHelperPosition}
          onChangeOpacity={setHelperOpacity}
          onChangeTooltipPlacement={setHelperTooltipPlacement}
          onChangeIcon={setHelperIcon}
        />
      </ControlBar>

      <PBusinessNoText value={finalValue} color={color} size={size} helper={helperProps} />

      <PReactCode name='PBusinessNoText' props={{ value: finalValue, size, color, helper: helperProps }} />
      <PReactCode
        name='PBusinessNoText'
        content={finalValue}
        props={{
          size,
          color,
          helper: helperProps,
        }}
      />
    </div>
  );
};

export type TTexts_PBusinessNoText = typeof Texts_PBusinessNoText;

export default Texts_PBusinessNoText;
