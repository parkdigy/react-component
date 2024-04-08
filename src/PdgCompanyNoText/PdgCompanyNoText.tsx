/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgCompanyNoTextProps as Props } from './PdgCompanyNoText.types';
import classNames from 'classnames';
import { companyNoAutoDash } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgCompanyNoText = React.forwardRef<HTMLSpanElement, Props>(({ children, value, className, ...props }, ref) => {
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
    <PdgText ref={ref} className={classNames('PdgCompanyNoText', className)} {...props}>
      {content}
    </PdgText>
  ) : null;
});

export default PdgCompanyNoText;
