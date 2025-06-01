/********************************************************************************************************************
 * 사업자등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgBusinessNoTextProps as Props } from './PdgBusinessNoText.types';
import classNames from 'classnames';
import { businessNoAutoDash } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgBusinessNoText = React.forwardRef<HTMLSpanElement, Props>(({ children, value, className, ...props }, ref) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const finalValue = children != null ? children : value != null ? value : '';

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const content = useMemo(() => businessNoAutoDash(finalValue).substring(0, 12), [finalValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <PdgText ref={ref} className={classNames('PdgBusinessNoText', className)} {...props}>
      {content}
    </PdgText>
  ) : null;
});

export default React.memo(PdgBusinessNoText);
