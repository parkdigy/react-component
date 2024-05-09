/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgPersonalNoTextProps as Props } from './PdgPersonalNoText.types';
import classNames from 'classnames';
import { personalNoAutoDash } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgPersonalNoText = React.forwardRef<HTMLSpanElement, Props>(({ children, value, className, ...props }, ref) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const content = personalNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 14);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <PdgText ref={ref} className={classNames('PdgPersonalNoText', className)} {...props}>
      {content}
    </PdgText>
  ) : null;
});

export default React.memo(PdgPersonalNoText);
