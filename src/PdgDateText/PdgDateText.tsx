/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgDateTextProps as Props } from './PdgDateText.types';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgDateText = React.forwardRef<HTMLSpanElement, Props>(
  (
    {
      children,
      value: initValue,
      type,
      className,
      dateClassName,
      dateStyle: initDateStyle,
      dateOpacity,
      dateSeparator,
      timeClassName,
      timeStyle: initTimeStyle,
      timeOpacity,
      twoLine,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const value = useMemo(() => (children != null ? children : initValue), [children, initValue]);

    const dateFormat = useMemo(() => {
      const separator = dateSeparator ? dateSeparator : '-';
      return `YYYY${separator}MM${separator}DD`;
    }, [dateSeparator]);

    const format = useMemo(() => {
      switch (type) {
        case 'date':
          return dateFormat;
        case 'hour':
          return `${dateFormat} HH시`;
        case 'minute':
          return `${dateFormat} HH시 mm분`;
        default:
          return `${dateFormat} HH:mm:ss`;
      }
    }, [type, dateFormat]);

    const values = useMemo(() => {
      if (!value) {
        return null;
      } else {
        const dValue = dayjs(value).format(format);
        if (dValue.length > dateFormat.length) {
          return [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
        } else {
          return [dValue.substring(0, dateFormat.length)];
        }
      }
    }, [dateFormat.length, format, value]);

    const dateStyle = useMemo(() => {
      const newDateStyle = { ...initDateStyle };
      if (dateOpacity !== undefined) {
        newDateStyle.opacity = dateOpacity;
      }
      return newDateStyle;
    }, [initDateStyle, dateOpacity]);

    const timeStyle = useMemo(() => {
      const newTimeStyle = { ...initTimeStyle };
      newTimeStyle.opacity =
        initTimeStyle?.opacity === undefined && timeOpacity === undefined
          ? 0.6
          : ifUndefined(initTimeStyle?.opacity, timeOpacity);
      if (!twoLine) {
        newTimeStyle.marginLeft = '0.3em';
      }
      return newTimeStyle;
    }, [initTimeStyle, timeOpacity, twoLine]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return values ? (
      <PdgText ref={ref} className={classNames('PdgDateText', className)} {...props}>
        <span className={classNames('PdgDateText-Date', dateClassName)} style={dateStyle}>
          {values[0]}
        </span>
        {twoLine && values.length > 1 && <br />}
        {values.length > 1 ? (
          <span className={classNames('PdgDateText-Time', timeClassName)} style={timeStyle}>
            {values[1]}
          </span>
        ) : null}
      </PdgText>
    ) : null;
  }
);

export default PdgDateText;
