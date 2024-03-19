/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgTelTextProps as Props } from './PdgTelText.types';
import classNames from 'classnames';
import { telNoAutoDash } from '@pdg/util';

const PdgTelText: React.FC<Props> = ({ value, className, style }) => {
  return value ? (
    <span className={classNames('PdgTelText', className)} style={style}>
      {telNoAutoDash(value)}
    </span>
  ) : null;
};

export default PdgTelText;
