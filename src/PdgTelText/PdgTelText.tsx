/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgTelTextProps as Props } from './PdgTelText.types';
import classNames from 'classnames';
import { telNoAutoDash } from '@pdg/util';

const PdgTelText: React.FC<Props> = ({ children, value, className, style }) => {
  const content = useMemo(() => telNoAutoDash(children != null ? children : value), [children, value]);

  return content ? (
    <span className={classNames('PdgTelText', className)} style={style}>
      {content}
    </span>
  ) : null;
};

export default PdgTelText;
