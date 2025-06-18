import React, { useMemo, useState } from 'react';
import { Texts_PIconTextProps as Props } from './Texts_PIconText.types';
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
  ControlItemIcon,
  ControlItemIconProps,
  ControlItemText,
  ControlItemTextProps,
} from '@ccomp';
import { PIconText, PReactCode } from '../../../../../src';

export const Texts_PIconText: React.FC<Props> = () => {
  const [content, setContent] = useState<ControlItemTextProps['value']>('텍스트');
  const [size, setSize] = useState<ControlItemFontSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [icon, setIcon] = useState<ControlItemIconProps['value']>();
  const [helperText, setHelperText] = useState<ControlBarRowHelperProps['text']>();
  const [helperPosition, setHelperPosition] = useState<ControlBarRowHelperProps['position']>();
  const [helperOpacity, setHelperOpacity] = useState<ControlBarRowHelperProps['opacity']>();
  const [helperTooltipPlacement, setHelperTooltipPlacement] = useState<ControlBarRowHelperProps['tooltipPlacement']>();
  const [helperIcon, setHelperIcon] = useState<ControlBarRowHelperProps['icon']>();

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
          <ControlItemText label='텍스트' helperText='텍스트' value={content} onChange={setContent} />
          <ControlItemFontSize value={size} onChange={setSize} />
          <ControlItemColor value={color} onChange={setColor} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemIcon required value={icon} onChange={setIcon} />
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

      <PIconText icon={icon} color={color} size={size} helper={helperProps}>
        {content}
      </PIconText>

      <PReactCode name='PIconText' content={content} props={{ size, color, icon, helper: helperProps }} />
    </div>
  );
};

export type TTexts_PIconText = typeof Texts_PIconText;

export default Texts_PIconText;
