/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PWonTextProps as Props } from './PWonText.types';
import PNumberText from '../PNumberText';
import classNames from 'classnames';

export const PWonText = React.forwardRef<HTMLSpanElement, Props>(({ className, ...props }, ref) => {
  return <PNumberText ref={ref} className={classNames('PWonText', className)} suffix='원' {...props} />;
});

export default React.memo(PWonText);
