/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { type PTelTextProps as Props } from './PTelText.types';
declare const PTelText: ({ children, value, className, ...props }: Props) => React.JSX.Element | null;
export default PTelText;
