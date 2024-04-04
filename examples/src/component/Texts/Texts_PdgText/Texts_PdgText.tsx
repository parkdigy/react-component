import React, { useState } from 'react';
import { Texts_PdgTextProps as Props } from './Texts_PdgText.types';
import {
  Code,
  ControlBar,
  ControlBarRow,
  ControlItemColor,
  ControlItemColorProps,
  ControlItemFontSize,
  ControlItemFontSizeProps,
  ControlItemText,
  ControlItemTextProps,
} from '@ccomp';
import { PdgText } from '../../../../../src';

export const Texts_PdgText: React.FC<Props> = () => {
  const [content, setContent] = useState<ControlItemTextProps['value']>('텍스트');
  const [size, setSize] = useState<ControlItemFontSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='텍스트' helperText='텍스트' value={content} onChange={setContent} />
          <ControlItemFontSize value={size} onChange={setSize} />
          <ControlItemColor value={color} onChange={setColor} />
        </ControlBarRow>
      </ControlBar>

      <PdgText color={color} size={size}>
        {content}
      </PdgText>

      <Code name='PdgText' content={content} props={{ size, color }} />
    </div>
  );
};

export type TTexts_PdgText = typeof Texts_PdgText;

export default Texts_PdgText;
