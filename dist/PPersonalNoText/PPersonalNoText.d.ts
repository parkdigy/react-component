/********************************************************************************************************************
 * 주민등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { PPersonalNoTextProps as Props } from './PPersonalNoText.types';
declare const PPersonalNoText: ({ children, value, className, ...props }: Props) => React.JSX.Element | null;
export default PPersonalNoText;
