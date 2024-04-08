/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgEmailTextProps as Props } from './PdgEmailText.types';
import classNames from 'classnames';
import { PdgText } from '../PdgText';
import { ifUndefined } from '@pdg/util';

const PdgEmailText = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, value: initValue, className, color, ...props }, ref) => {
    const value = useMemo(() => (children != null ? children : initValue), [children, initValue]);

    return value != null ? (
      <a ref={ref} href={`mailto:${value}`} className={classNames('PdgEmailText', className)}>
        <PdgText color={ifUndefined(color, 'primary')} {...props}>
          {value}
        </PdgText>
      </a>
    ) : null;
  }
);

export default PdgEmailText;
