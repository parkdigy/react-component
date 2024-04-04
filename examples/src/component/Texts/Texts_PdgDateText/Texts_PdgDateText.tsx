import React, { useMemo, useState } from 'react';
import { Texts_PdgDateTextProps as Props } from './Texts_PdgDateText.types';
import {
  Code,
  ControlBar,
  ControlBarRow,
  ControlItemButtonGroup,
  ControlItemOnOff,
  ControlItemOnOffProps,
  ControlItemOpacity,
  ControlItemOpacityProps,
} from '@ccomp';
import { PdgDateText, PdgDateTextType } from '../../../../../src';
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

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const items = useMemo(() => [lv('문자', '2024-01-01 12:34:56'), lv('Date', new Date()), lv('Dayjs', dayjs())], []);

  const typeItems = useMemo(() => ['datetime', 'date', 'hour', 'minute'] as const, []);

  const dateSeparatorItems = useMemo(() => ['-', '/', '.', lv('공백', ' ')], []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      <ControlBar>
        <ControlBarRow>
          <ControlItemButtonGroup
            required
            label='value'
            helperText='값 (문자 / Date / Dayjs)'
            items={items}
            value={value}
            onChange={setValue}
          />
          <ControlItemButtonGroup
            label='type'
            helperText='표시 구분'
            value={type}
            items={typeItems}
            onChange={setType}
          />
          <ControlItemButtonGroup
            items={dateSeparatorItems}
            label='날짜 구분자'
            value={dateSeparator}
            onChange={setDateSeparator}
          />
          <ControlItemOnOff label='twoLine' helperText='두 줄로 표시 여부' value={twoLine} onChange={setTwoLine} />
        </ControlBarRow>
        <ControlBarRow>
          <ControlItemOpacity
            label='dateOpacity'
            helperText='날짜 투명도'
            value={dateOpacity}
            onChange={setDateOpacity}
          />
          <ControlItemOpacity
            label='timeOpacity'
            helperText='시간 투명도'
            value={timeOpacity}
            onChange={setTimeOpacity}
          />
        </ControlBarRow>
      </ControlBar>

      <PdgDateText
        value={value}
        type={type}
        dateSeparator={dateSeparator}
        twoLine={twoLine}
        dateOpacity={dateOpacity}
        timeOpacity={timeOpacity}
      />

      <Code
        name='PdgDateText'
        props={{
          value: value instanceof Date ? new Text('Date') : dayjs.isDayjs(value) ? new Text('Dayjs') : value,
          type,
          dateSeparator,
          twoLine,
          dateOpacity,
          timeOpacity,
        }}
      />
      <Code
        name='PdgDateText'
        content={value instanceof Date ? '{Date}' : dayjs.isDayjs(value) ? '{Dayjs}' : value}
        props={{
          type,
          dateSeparator,
          twoLine,
          dateOpacity,
          timeOpacity,
        }}
      />
    </div>
  );
};

export type TTexts_PdgDateText = typeof Texts_PdgDateText;

export default Texts_PdgDateText;
