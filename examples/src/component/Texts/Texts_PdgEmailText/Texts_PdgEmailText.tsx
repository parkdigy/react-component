import React, { useMemo, useState } from 'react';
import { Texts_PdgEmailTextProps as Props } from './Texts_PdgEmailText.types';
import { Code, ControlBar, ControlBarRow, ControlItemText, ControlItemTextProps } from '@ccomp';
import { PdgEmailText } from '../../../../../src';

export const Texts_PdgEmailText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemTextProps['value']>('test@test.com');

  const finalValue = useMemo(() => (empty(value) ? undefined : value), [value]);

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='value' helperText='값 (문자)' value={value} onChange={setValue} />
        </ControlBarRow>
      </ControlBar>

      <PdgEmailText value={finalValue} />

      <Code name='PdgEmailText' props={{ value: finalValue }} />
      <Code name='PdgEmailText' content={finalValue} />
    </div>
  );
};

export type TTexts_PdgEmailText = typeof Texts_PdgEmailText;

export default Texts_PdgEmailText;
