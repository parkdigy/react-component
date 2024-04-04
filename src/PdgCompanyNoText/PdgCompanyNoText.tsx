/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgCompanyNoTextProps as Props } from './PdgCompanyNoText.types';
import classNames from 'classnames';
import { companyNoAutoDash } from '@pdg/util';

const PdgCompanyNoText: React.FC<Props> = ({ children, value, className, style }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const content = useMemo(
    () => companyNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 12),
    [children, value]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <span className={classNames('PdgCompanyNoText', className)} style={style}>
      {content}
    </span>
  ) : null;
};

export default PdgCompanyNoText;
