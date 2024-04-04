import React, { useMemo, useState } from 'react';
import { Texts_PdgWonTextProps as Props } from './Texts_PdgWonText.types';
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
import { PdgWonText } from '../../../../../src';

export const Texts_PdgWonText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemNumberProps['value']>(1234567.123);
  const [decimalOpacity, setDecimalOpacity] = useState<ControlItemOpacityProps['value']>();
  const [prefix, setPrefix] = useState<ControlItemTextProps['value']>();
  const [prefixOpacity, setPrefixOpacity] = useState<ControlItemOpacityProps['value']>();
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
          <ControlItemOpacity
            label='suffixOpacity'
            helperText='끝 문자 투명도'
            value={suffixOpacity}
            onChange={setSuffixOpacity}
          />
        </ControlBarRow>
      </ControlBar>

      <PdgWonText
        value={finalValue}
        decimalOpacity={decimalOpacity}
        prefix={prefix}
        prefixOpacity={prefixOpacity}
        suffixOpacity={suffixOpacity}
      />

      <Code
        name='PdgWonText'
        props={{
          value: finalValue,
          decimalOpacity,
          prefix: prefix === '' ? undefined : prefix,
          prefixOpacity,
          suffixOpacity,
        }}
      />
      <Code
        name='PdgWonText'
        content={finalValue}
        props={{ decimalOpacity, prefix: prefix === '' ? undefined : prefix, prefixOpacity, suffixOpacity }}
      />
    </div>
  );
};

export type TTexts_PdgWonText = typeof Texts_PdgWonText;

export default Texts_PdgWonText;
