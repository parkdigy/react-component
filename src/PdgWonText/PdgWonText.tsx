/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgWonTextProps as Props } from './PdgWonText.types';
import PdgNumberText from '../PdgNumberText';
import classNames from 'classnames';

export const PdgWonText = React.forwardRef<HTMLSpanElement, Props>(({ className, ...props }, ref) => {
  return <PdgNumberText ref={ref} className={classNames('PdgWonText', className)} suffix='원' {...props} />;
});

export default PdgWonText;
