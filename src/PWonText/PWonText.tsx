/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PWonTextProps as Props } from './PWonText.types';
import PNumberText from '../PNumberText';
import classNames from 'classnames';

export const PWonText = ({ className, ...props }: Props) => {
  return <PNumberText className={classNames('PWonText', className)} suffix='원' {...props} />;
};

export default PWonText;
