import React, { useMemo, useState } from 'react';
import { Texts_PPersonalNoTextProps as Props } from './Texts_PPersonalNoText.types';
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
import { PPersonalNoText, PReactCode } from '../../../../../src';

export const Texts_PPersonalNoText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemTextProps['value']>('1234561234567');
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

      <PPersonalNoText value={finalValue} color={color} size={size} helper={helperProps} />

      <PReactCode name='PPersonalNoText' props={{ value: finalValue, size, color, helper: helperProps }} />
      <PReactCode
        name='PPersonalNoText'
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

export type TTexts_PPersonalNoText = typeof Texts_PPersonalNoText;

export default Texts_PPersonalNoText;
