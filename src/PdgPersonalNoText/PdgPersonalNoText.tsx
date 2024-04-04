/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgPersonalNoTextProps as Props } from './PdgPersonalNoText.types';
import classNames from 'classnames';
import { personalNoAutoDash } from '@pdg/util';

const PdgPersonalNoText: React.FC<Props> = ({ children, value, className, style }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const content = useMemo(
    () => personalNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 14),
    [children, value]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return content ? (
    <span className={classNames('PdgPersonalNoText', className)} style={style}>
      {content}
    </span>
  ) : null;
};

export default PdgPersonalNoText;
