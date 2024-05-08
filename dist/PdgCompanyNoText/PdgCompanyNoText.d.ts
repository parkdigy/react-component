/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
import React from 'react';
import { PdgCompanyNoTextProps as Props } from './PdgCompanyNoText.types';
declare const PdgCompanyNoText: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export default PdgCompanyNoText;
