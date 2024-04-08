import React, { useMemo, useState } from 'react';
import { Texts_PdgDateTextProps as Props } from './Texts_PdgDateText.types';
import {
  ControlBar,
  ControlBarRow,
  ControlBarRowDivider,
  ControlBarRowHelper,
  ControlBarRowHelperProps,
  ControlItemButtonGroup,
  ControlItemColor,
  ControlItemColorProps,
  ControlItemFontSize,
  ControlItemFontSizeProps,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemOpacity,
  ControlItemOpacityProps,
} from '@ccomp';
import { PdgDateText, PdgDateTextType, PdgReactCode } from '../../../../../src';
import dayjs, { Dayjs } from 'dayjs';

export const Texts_PdgDateText: React.FC<Props> = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState<string | Date | Dayjs | undefined>();
  const [type, setType] = useState<PdgDateTextType>();
  const [twoLine, setTwoLine] = useState<ControlItemOnOffProps['value']>();
  const [dateOpacity, setDateOpacity] = useState<ControlItemOpacityProps['value']>();
  const [timeOpacity, setTimeOpacity] = useState<ControlItemOpacityProps['value']>();
  const [dateSeparator, setDateSeparator] = useState<string>();
  const [size, setSize] = useState<ControlItemFontSizeProps['value']>();
  const [color, setColor] = useState<ControlItemColorProps['value']>();
  const [helperText, setHelperText] = useState<ControlBarRowHelperProps['text']>();
  const [helperPosition, setHelperPosition] = useState<ControlBarRowHelperProps['position']>();
  const [helperOpacity, setHelperOpacity] = useState<ControlBarRowHelperProps['opacity']>();
  const [helperTooltipPlacement, setHelperTooltipPlacement] = useState<ControlBarRowHelperProps['tooltipPlacement']>();
  const [helperIcon, setHelperIcon] = useState<ControlBarRowHelperProps['icon']>();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const items = useMemo(() => [lv('문자', '2024-01-01 12:34:56'), lv('Date', new Date()), lv('Dayjs', dayjs())], []);

  const typeItems = useMemo(() => ['datetime', 'date', 'hour', 'minute'] as const, []);

  const dateSeparatorItems = useMemo(() => ['-', '/', '.', lv('공백', ' ')], []);

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

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemButtonGroup
            required
            label='값 (문자 / Date / Dayjs)'
            helperText='value'
            items={items}
            value={value}
            onChange={setValue}
          />
          <ControlItemButtonGroup
            label='표시 구분'
            helperText='type'
            value={type}
            items={typeItems}
            onChange={setType}
          />
          <ControlItemButtonGroup
            items={dateSeparatorItems}
            label='날짜 구분자'
            helperText='dateSeparator'
            value={dateSeparator}
            onChange={setDateSeparator}
          />
          <ControlItemOnOff label='두 줄로 표시 여부' helperText='twoLine' value={twoLine} onChange={setTwoLine} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemOpacity
            label='날짜 투명도'
            helperText='dateOpacity'
            value={dateOpacity}
            onChange={setDateOpacity}
          />
          <ControlItemOpacity
            label='시간 투명도'
            helperText='timeOpacity'
            value={timeOpacity}
            onChange={setTimeOpacity}
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

      <PdgDateText
        value={value}
        type={type}
        dateSeparator={dateSeparator}
        twoLine={twoLine}
        dateOpacity={dateOpacity}
        timeOpacity={timeOpacity}
        size={size}
        color={color}
        helper={helperProps}
      />

      <PdgReactCode
        name='PdgDateText'
        props={{
          value: value instanceof Date ? new Text('Date') : dayjs.isDayjs(value) ? new Text('Dayjs') : value,
          type,
          dateSeparator,
          twoLine,
          dateOpacity,
          timeOpacity,
          size,
          color,
          helper: helperProps,
        }}
      />
      <PdgReactCode
        name='PdgDateText'
        content={value instanceof Date ? '{Date}' : dayjs.isDayjs(value) ? '{Dayjs}' : value}
        props={{
          type,
          dateSeparator,
          twoLine,
          dateOpacity,
          timeOpacity,
          size,
          color,
          helper: helperProps,
        }}
      />
    </div>
  );
};

export type TTexts_PdgDateText = typeof Texts_PdgDateText;

export default Texts_PdgDateText;
