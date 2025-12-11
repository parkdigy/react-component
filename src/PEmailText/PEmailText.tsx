/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PEmailTextProps as Props } from './PEmailText.types';
import classNames from 'classnames';
import { PText } from '../PText';
import { ifUndefined } from '@pdg/compare';

const PEmailText = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, value: initValue, className, color, ...props }, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const value = ifUndefined(children, initValue);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return value ? (
      <a ref={ref} href={`mailto:${value}`} className={classNames('PEmailText', className)}>
        <PText color={ifUndefined(color, 'primary')} {...props}>
          {value}
        </PText>
      </a>
    ) : null;
  }
);

export default React.memo(PEmailText);
