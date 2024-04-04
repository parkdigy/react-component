import React, { useMemo, useState } from 'react';
import { PdgTelText } from '../../../../../src';
import { Texts_PdgTelTextProps as Props } from './Texts_PdgTelText.types';
import { Code, ControlBar, ControlBarRow, ControlItemText, ControlItemTextProps } from '@ccomp';

export const Texts_PdgTelText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemTextProps['value']>('01012345678');

  const finalValue = useMemo(() => (empty(value) ? undefined : value), [value]);

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='value' helperText='값 (문자)' value={value} onChange={setValue} />
        </ControlBarRow>
      </ControlBar>

      <PdgTelText value={finalValue} />

      <Code name='PdgTelText' props={{ value: finalValue }} />
      <Code name='PdgTelText' content={finalValue} />
    </div>
  );
};

export type TTexts_PdgTelText = typeof Texts_PdgTelText;

export default Texts_PdgTelText;
