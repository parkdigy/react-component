/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { PEmailTextProps as Props } from './PEmailText.types';
declare const PEmailText: ({ ref, children, value: initValue, className, color, ...props }: Props) => React.JSX.Element | null;
export default PEmailText;
