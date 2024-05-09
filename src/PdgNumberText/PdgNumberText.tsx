/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PdgNumberTextProps as Props } from './PdgNumberText.types';
import { styled } from '@mui/material';
import classNames from 'classnames';
import { ifUndefined, numberFormat } from '@pdg/util';
import { PdgText } from '../PdgText';

const PdgNumberText = React.forwardRef<HTMLSpanElement, Props>(
  (
    { className, children, value: initValue, decimalOpacity, prefix, prefixOpacity, suffix, suffixOpacity, ...props },
    ref
  ) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const value = ifUndefined(children, initValue);
    const formattedValue = value != null ? numberFormat(value).split('.') : null;
    const integerValue = formattedValue ? formattedValue[0] : undefined;
    const decimalValue = formattedValue ? formattedValue[0] : undefined;

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return integerValue != undefined ? (
      <PdgText ref={ref} className={classNames('PdgNumberText', className)} {...props}>
        {prefix !== undefined && (
          <StyledPrefix
            className='PdgNumberText-Prefix'
            style={{ opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity }}
          >
            {prefix}
          </StyledPrefix>
        )}
        <span className='PdgNumberText-Integer'>{integerValue === '' ? '0' : integerValue}</span>
        {decimalValue !== undefined && (
          <span
            className='PdgNumberText-Decimal'
            style={{ opacity: decimalOpacity === undefined ? 1 : decimalOpacity }}
          >
            .{decimalValue}
          </span>
        )}
        {suffix !== undefined && (
          <StyledSuffix
            className='PdgNumberText-Suffix'
            style={{ opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity }}
          >
            {suffix}
          </StyledSuffix>
        )}
      </PdgText>
    ) : null;
  }
);

export default React.memo(PdgNumberText);

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const StyledPrefix = styled('span')`
  margin-right: 2px;
`;

const StyledSuffix = styled('span')`
  margin-left: 2px;
`;
