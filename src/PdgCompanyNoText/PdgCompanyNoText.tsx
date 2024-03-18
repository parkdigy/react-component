/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgCompanyNoTextProps as Props } from './PdgCompanyNoText.types';
import classNames from 'classnames';
import { companyNoAutoDash } from '@pdg/util';

const PdgCompanyNoText: React.FC<Props> = ({ value, className, style }) => {
  return value ? (
    <span className={classNames('PdgCompanyNoText', className)} style={style}>
      {companyNoAutoDash(value)}
    </span>
  ) : null;
};

export default PdgCompanyNoText;
