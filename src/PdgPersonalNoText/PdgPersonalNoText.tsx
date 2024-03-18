/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgPersonalNoTextProps as Props } from './PdgPersonalNoText.types';
import classNames from 'classnames';
import { personalNoAutoDash } from '@pdg/util';

const PdgPersonalNoText: React.FC<Props> = ({ value, className, style }) => {
  return value ? (
    <span className={classNames('PdgPersonalNoText', className)} style={style}>
      {personalNoAutoDash(value)}
    </span>
  ) : null;
};

export default PdgPersonalNoText;
