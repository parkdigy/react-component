import React, { useMemo, useState } from 'react';
import { Texts_PDateTextProps as Props } from './Texts_PDateText.types';
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
import { PDateText, PDateTextType, PReactCode } from '../../../../../src';
import dayjs, { Dayjs } from 'dayjs';

export const Texts_PDateText: React.FC<Props> = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState<string | Date | Dayjs | undefined>();
  const [type, setType] = useState<PDateTextType>();
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

      <PDateText
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

      <PReactCode
        name='PDateText'
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
      <PReactCode
        name='PDateText'
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

export type TTexts_PDateText = typeof Texts_PDateText;

export default Texts_PDateText;
