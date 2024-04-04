import React, { useMemo, useState } from 'react';
import { Texts_PdgCompanyNoTextProps as Props } from './Texts_PdgCompanyNoText.types';
import { Code, ControlBar, ControlBarRow, ControlItemText, ControlItemTextProps } from '@ccomp';
import { PdgCompanyNoText } from '../../../../../src';

export const Texts_PdgCompanyNoText: React.FC<Props> = () => {
  const [value, setValue] = useState<ControlItemTextProps['value']>('0123456789');

  const finalValue = useMemo(() => (empty(value) ? undefined : value), [value]);

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='value' helperText='값 (문자)' value={value} onChange={setValue} />
        </ControlBarRow>
      </ControlBar>

      <PdgCompanyNoText value={finalValue} />

      <Code name='PdgCompanyNoText' props={{ value: finalValue }} />
      <Code name='PdgCompanyNoText' content={finalValue} />
    </div>
  );
};

export type TTexts_PdgCompanyNoText = typeof Texts_PdgCompanyNoText;

export default Texts_PdgCompanyNoText;
