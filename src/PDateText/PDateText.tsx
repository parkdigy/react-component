/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { type PDateTextProps as Props } from './PDateText.types';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { PText } from '../PText';

const PDateText = ({
  children,
  value: initValue,
  type,
  className,
  dateClassName,
  dateStyle: initDateStyle,
  dateOpacity,
  dateSeparator = '-',
  timeClassName,
  timeStyle: initTimeStyle,
  timeOpacity,
  twoLine,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const value = children ?? initValue;

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const { values, dateStyle, timeStyle } = useMemo(() => {
    const dateFormat = `YYYY${dateSeparator}MM${dateSeparator}DD`;

    const format =
      type === 'date'
        ? dateFormat
        : type === 'hour'
          ? `${dateFormat} HH시`
          : type === 'minute'
            ? `${dateFormat} HH시 mm분`
            : `${dateFormat} HH:mm:ss`;

    let values: string[] | undefined = undefined;
    if (value) {
      const dValue = dayjs(value).format(format);
      if (dValue.length > dateFormat.length) {
        values = [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
      } else {
        values = [dValue.substring(0, dateFormat.length)];
      }
    }

    const dateStyle = { ...initDateStyle };
    if (dateOpacity !== undefined) {
      dateStyle.opacity = dateOpacity;
    }

    const timeStyle = {
      ...initTimeStyle,
      opacity:
        initTimeStyle?.opacity === undefined && timeOpacity === undefined
          ? 0.6
          : (initTimeStyle?.opacity ?? timeOpacity),
    };
    if (!twoLine) {
      timeStyle.marginLeft = '0.3em';
    }

    return { values, dateStyle, timeStyle };
  }, [dateOpacity, dateSeparator, initDateStyle, initTimeStyle, timeOpacity, twoLine, type, value]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return values ? (
    <PText className={classNames('PDateText', className)} {...props}>
      <span className={classNames('PDateText-Date', dateClassName)} style={dateStyle}>
        {values[0]}
      </span>
      {twoLine && values.length > 1 && <br />}
      {values.length > 1 ? (
        <span className={classNames('PDateText-Time', timeClassName)} style={timeStyle}>
          {values[1]}
        </span>
      ) : null}
    </PText>
  ) : null;
};

export default PDateText;
