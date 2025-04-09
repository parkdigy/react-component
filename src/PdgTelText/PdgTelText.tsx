/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgTelTextProps as Props } from './PdgTelText.types';
import classNames from 'classnames';
import { telNoAutoDash } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgTelText = React.forwardRef<HTMLSpanElement, Props>(({ children, value, className, ...props }, ref) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const finalValue = children != null ? children : value;

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const content = useMemo(() => telNoAutoDash(finalValue), [finalValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <PdgText ref={ref} className={classNames('PdgTelText', className)} {...props}>
      {content}
    </PdgText>
  ) : null;
});

export default React.memo(PdgTelText);
