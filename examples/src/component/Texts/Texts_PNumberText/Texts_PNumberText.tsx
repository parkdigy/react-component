import React, { useMemo, useState } from 'react';
import { PNumberText, PReactCode } from '../../../../../src';
import { Texts_PNumberTextProps as Props } from './Texts_PNumberText.types';
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

export const Texts_PNumberText = ({}: Props) => {
  const [value, setValue] = useState<ControlItemNumberProps['value']>(1234567.123);
  const [decimalOpacity, setDecimalOpacity] = useState<ControlItemOpacityProps['value']>();
  const [prefix, setPrefix] = useState<ControlItemTextProps['value']>('$');
  const [prefixOpacity, setPrefixOpacity] = useState<ControlItemOpacityProps['value']>();
  const [suffix, setSuffix] = useState<ControlItemTextProps['value']>('달러');
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
          <ControlItemText label='끝 문자' helperText='suffix' value={suffix} onChange={setSuffix} />
          <ControlItemOpacity
            label='끝 문자 투명도'
            helperText='suffixOpacity'
            disabled={empty(suffix)}
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

      <PNumberText
        value={finalValue}
        decimalOpacity={decimalOpacity}
        prefix={prefix}
        prefixOpacity={prefixOpacity}
        suffix={suffix}
        suffixOpacity={suffixOpacity}
        size={size}
        color={color}
        helper={helperProps}
      />

      <PReactCode
        name='PNumberText'
        props={{
          value: finalValue,
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffix: suffix === '' ? undefined : suffix,
          suffixOpacity,
          size,
          color,
          helper: helperProps,
        }}
      />
      <PReactCode
        name='PNumberText'
        content={value}
        props={{
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffix: suffix === '' ? undefined : suffix,
          suffixOpacity,
          size,
          color,
          helper: helperProps,
        }}
      />
    </div>
  );
};

export default Texts_PNumberText;
