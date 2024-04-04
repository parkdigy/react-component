/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgEmailTextProps as Props } from './PdgEmailText.types';
import classNames from 'classnames';

const PdgEmailText: React.FC<Props> = ({ children, value: initValue, className, style }) => {
  const value = useMemo(() => (children != null ? children : initValue), [children, initValue]);

  return value != null ? (
    <a href={`mailto:${value}`} className={classNames('PdgEmailText', className)} style={style}>
      {value}
    </a>
  ) : null;
};

export default PdgEmailText;
