/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { PIconTextProps as Props } from './PIconText.types';
declare const PIconText: ({ children, className, color, icon, size, iconMarginRight, iconProps: initIconProps, textProps, helper, ph, pv, paddingLeft, paddingRight, paddingTop, paddingBottom, ...otherProps }: Props) => React.JSX.Element;
export default PIconText;
