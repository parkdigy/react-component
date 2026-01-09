/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/
import React from 'react';
import { type PIconProps as Props } from './PIcon.types';
declare const PIcon: ({ ref, className, children: InitChildren, style: initStyle, size, color, tooltip, tooltipPlacement, tooltipProps, ...props }: Props) => React.JSX.Element | null;
export default PIcon;
