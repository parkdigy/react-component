import React, { useMemo, useState } from 'react';
import { PdgNumberText } from '../../../../../src';
import { Texts_PdgNumberTextProps as Props } from './Texts_PdgNumberText.types';
import {
  Code,
  ControlBar,
  ControlBarRow,
  ControlItemNumber,
  ControlItemNumberProps,
  ControlItemOpacity,
  ControlItemOpacityProps,
  ControlItemText,
  ControlItemTextProps,
} from '@ccomp';

export const Texts_PdgNumberText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemNumberProps['value']>(1234567.123);
  const [decimalOpacity, setDecimalOpacity] = useState<ControlItemOpacityProps['value']>();
  const [prefix, setPrefix] = useState<ControlItemTextProps['value']>('$');
  const [prefixOpacity, setPrefixOpacity] = useState<ControlItemOpacityProps['value']>();
  const [suffix, setSuffix] = useState<ControlItemTextProps['value']>('달러');
  const [suffixOpacity, setSuffixOpacity] = useState<ControlItemOpacityProps['value']>();

  const finalValue = useMemo(() => (empty(value) ? undefined : value), [value]);

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemNumber label='value' helperText='값 (숫자 / 문자)' value={value} onChange={setValue} />
          <ControlItemOpacity
            label='decimalOpacity'
            helperText='소수 투명도'
            value={decimalOpacity}
            onChange={setDecimalOpacity}
          />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemText label='prefix' helperText='시작 문자' value={prefix} onChange={setPrefix} />
          <ControlItemOpacity
            label='prefixOpacity'
            helperText='시작 문자 투명도'
            disabled={empty(prefix)}
            value={prefixOpacity}
            onChange={setPrefixOpacity}
          />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemText label='suffix' helperText='끝 문자' value={suffix} onChange={setSuffix} />
          <ControlItemOpacity
            label='suffixOpacity'
            helperText='끝 문자 투명도'
            disabled={empty(suffix)}
            value={suffixOpacity}
            onChange={setSuffixOpacity}
          />
        </ControlBarRow>
      </ControlBar>
      <PdgNumberText
        value={finalValue}
        decimalOpacity={decimalOpacity}
        prefix={prefix}
        prefixOpacity={prefixOpacity}
        suffix={suffix}
        suffixOpacity={suffixOpacity}
      />
      <Code
        name='PdgNumberText'
        props={{
          value: finalValue,
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffix: suffix === '' ? undefined : suffix,
          suffixOpacity,
        }}
      />
      <Code
        name='PdgNumberText'
        content={value}
        props={{
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffix: suffix === '' ? undefined : suffix,
          suffixOpacity,
        }}
      />
    </div>
  );
};

export type TTexts_PdgNumberText = typeof Texts_PdgNumberText;

export default Texts_PdgNumberText;
