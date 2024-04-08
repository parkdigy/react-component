import React, { useState } from 'react';
import { Texts_PdgIconTextProps as Props } from './Texts_PdgIconText.types';
import {
  ControlBar,
  ControlBarRow,
  ControlItemColor,
  ControlItemColorProps,
  ControlItemFontSize,
  ControlItemFontSizeProps,
  ControlItemIcon,
  ControlItemIconProps,
  ControlItemText,
  ControlItemTextProps,
} from '@ccomp';
import { PdgIconText, PdgReactCode } from '../../../../../src';

export const Texts_PdgIconText: React.FC<Props> = () => {
  const [content, setContent] = useState<ControlItemTextProps['value']>('텍스트');
  const [size, setSize] = useState<ControlItemFontSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemText label='텍스트' helperText='텍스트' value={content} onChange={setContent} />
          <ControlItemFontSize value={size} onChange={setSize} />
          <ControlItemColor value={color} onChange={setColor} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemIcon required value={icon} onChange={setIcon} />
        </ControlBarRow>
      </ControlBar>

      <PdgIconText icon={icon} color={color} size={size}>
        {content}
      </PdgIconText>

      <PdgReactCode name='PdgIconText' content={content} props={{ size, color, icon }} />
    </div>
  );
};

export type TTexts_PdgIconText = typeof Texts_PdgIconText;

export default Texts_PdgIconText;
