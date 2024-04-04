import React, { useMemo, useState } from 'react';
import { Texts_PdgPersonalNoTextProps as Props } from './Texts_PdgPersonalNoText.types';
import { Code, ControlBar, ControlBarRow, ControlItemText, ControlItemTextProps } from '@ccomp';
import { PdgPersonalNoText } from '../../../../../src';

export const Texts_PdgPersonalNoText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemTextProps['value']>('1234561234567');

  const finalValue = useMemo(() => (empty(value) ? undefined : value), [value]);

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='value' helperText='값 (문자)' value={value} onChange={setValue} />
        </ControlBarRow>
      </ControlBar>

      <PdgPersonalNoText value={finalValue} />

      <Code name='PdgPersonalNoText' props={{ value: finalValue }} />
      <Code name='PdgPersonalNoText' content={value} />
    </div>
  );
};

export type TTexts_PdgPersonalNoText = typeof Texts_PdgPersonalNoText;

export default Texts_PdgPersonalNoText;
