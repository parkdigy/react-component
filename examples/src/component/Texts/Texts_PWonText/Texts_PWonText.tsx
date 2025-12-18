import React, { useMemo, useState } from 'react';
import { Texts_PWonTextProps as Props } from './Texts_PWonText.types';
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
  ControlItemNumber,
  ControlItemNumberProps,
  ControlItemOpacity,
  ControlItemOpacityProps,
  ControlItemText,
  ControlItemTextProps,
} from '@ccomp';
import { PReactCode, PWonText } from '../../../../../src';

export const Texts_PWonText = ({}: Props) => {
  const [value, setValue] = useState<ControlItemNumberProps['value']>(1234567.123);
  const [decimalOpacity, setDecimalOpacity] = useState<ControlItemOpacityProps['value']>();
  const [prefix, setPrefix] = useState<ControlItemTextProps['value']>();
  const [prefixOpacity, setPrefixOpacity] = useState<ControlItemOpacityProps['value']>();
  const [suffixOpacity, setSuffixOpacity] = useState<ControlItemOpacityProps['value']>();
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
          <ControlItemNumber label='값 (숫자 / 문자)' helperText='value' value={value} onChange={setValue} />
          <ControlItemOpacity
            label='소수 투명도'
            helperText='decimalOpacity'
            value={decimalOpacity}
            onChange={setDecimalOpacity}
          />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemText label='시작 문자' helperText='prefix' value={prefix} onChange={setPrefix} />
          <ControlItemOpacity
            label='시작 문자 투명도'
            helperText='prefixOpacity'
            disabled={empty(prefix)}
            value={prefixOpacity}
            onChange={setPrefixOpacity}
          />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemOpacity
            label='끝 문자 투명도'
            helperText='suffixOpacity'
            value={suffixOpacity}
            onChange={setSuffixOpacity}
          />
        </ControlBarRow>
        <ControlBarRow>
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

      <PWonText
        value={finalValue}
        decimalOpacity={decimalOpacity}
        prefix={prefix}
        prefixOpacity={prefixOpacity}
        suffixOpacity={suffixOpacity}
        size={size}
        color={color}
        helper={helperProps}
      />

      <PReactCode
        name='PWonText'
        props={{
          value: finalValue,
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffixOpacity,
          size,
          color,
          helper: helperProps,
        }}
      />
      <PReactCode
        name='PWonText'
        content={finalValue}
        props={{
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffixOpacity,
          size,
          color,
          helper: helperProps,
        }}
      />
    </div>
  );
};

export default Texts_PWonText;
