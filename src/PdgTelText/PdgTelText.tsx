/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgTelTextProps as Props } from './PdgTelText.types';
import classNames from 'classnames';
import { telNoAutoDash } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgTelText = React.forwardRef<HTMLSpanElement, Props>(({ children, value, className, ...props }, ref) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const content = telNoAutoDash(children != null ? children : value);

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
