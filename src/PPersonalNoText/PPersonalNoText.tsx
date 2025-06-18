/********************************************************************************************************************
 * 주민등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PPersonalNoTextProps as Props } from './PPersonalNoText.types';
import classNames from 'classnames';
import { formatPersonalNo } from '@pdg/formatting';
import { PText } from '../PText';

const PPersonalNoText = React.forwardRef<HTMLSpanElement, Props>(({ children, value, className, ...props }, ref) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const finalValue = children != null ? children : value != null ? value : '';

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const content = useMemo(() => formatPersonalNo(finalValue).substring(0, 14), [finalValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <PText ref={ref} className={classNames('PPersonalNoText', className)} {...props}>
      {content}
    </PText>
  ) : null;
});

export default React.memo(PPersonalNoText);
