/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { type PNumberTextProps as Props } from './PNumberText.types';
declare const PNumberText: ({ className, children, value: initValue, decimalOpacity, prefix, prefixOpacity, suffix, suffixOpacity, ...props }: Props) => React.JSX.Element | null;
export default PNumberText;
