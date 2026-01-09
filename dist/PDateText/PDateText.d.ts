/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { type PDateTextProps as Props } from './PDateText.types';
declare const PDateText: ({ children, value: initValue, type, className, dateClassName, dateStyle: initDateStyle, dateOpacity, dateSeparator, timeClassName, timeStyle: initTimeStyle, timeOpacity, twoLine, ...props }: Props) => React.JSX.Element | null;
export default PDateText;
