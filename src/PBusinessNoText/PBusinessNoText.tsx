/********************************************************************************************************************
 * 사업자등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PBusinessNoTextProps as Props } from './PBusinessNoText.types';
import classNames from 'classnames';
import { formatBusinessNo } from '@pdg/formatting';
import { PText } from '../PText';

const PBusinessNoText = ({ children, value, className, ...props }: Props) => {
  /********************************************************************************************************************
   * content
   * ******************************************************************************************************************/

  const content = formatBusinessNo(children ?? value ?? '').substring(0, 12);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <PText className={classNames('PBusinessNoText', className)} {...props}>
      {content}
    </PText>
  ) : null;
};

export default PBusinessNoText;
