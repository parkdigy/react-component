/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { PdgDateTextProps as Props } from './PdgDateText.types';
declare const PdgDateText: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export default PdgDateText;
