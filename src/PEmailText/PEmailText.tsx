/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PEmailTextProps as Props } from './PEmailText.types';
import classNames from 'classnames';
import { PText } from '../PText';

const PEmailText = ({ ref, children, value: initValue, className, color, ...props }: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const value = children ?? initValue;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return value ? (
    <a ref={ref} href={`mailto:${value}`} className={classNames('PEmailText', className)}>
      <PText color={color ?? 'primary'} {...props}>
        {value}
      </PText>
    </a>
  ) : null;
};

export default PEmailText;
