/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { type PNumberTextProps as Props } from './PNumberText.types';
import { styled } from '@mui/material';
import classNames from 'classnames';
import { formatNumber } from '@pdg/formatting';
import { PText } from '../PText';

const PNumberText = ({
  className,
  children,
  value: initValue,
  decimalOpacity,
  prefix,
  prefixOpacity,
  suffix,
  suffixOpacity,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const value = children ?? initValue;

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const { integerValue, decimalValue } = useMemo(() => {
    const formattedValue = value != null ? formatNumber(value).split('.') : null;
    const integerValue = formattedValue ? formattedValue[0] : undefined;
    const decimalValue = formattedValue && formattedValue.length > 1 ? formattedValue[1] : undefined;

    return { integerValue, decimalValue };
  }, [value]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return integerValue != undefined ? (
    <PText className={classNames('PNumberText', className)} {...props}>
      {prefix !== undefined && (
        <StyledPrefix
          className='PNumberText-Prefix'
          style={{ opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity }}
        >
          {prefix}
        </StyledPrefix>
      )}
      <span className='PNumberText-Integer'>{integerValue === '' ? '0' : integerValue}</span>
      {decimalValue !== undefined && (
        <span className='PNumberText-Decimal' style={{ opacity: decimalOpacity === undefined ? 1 : decimalOpacity }}>
          .{decimalValue}
        </span>
      )}
      {suffix !== undefined && (
        <StyledSuffix
          className='PNumberText-Suffix'
          style={{ opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity }}
        >
          {suffix}
        </StyledSuffix>
      )}
    </PText>
  ) : null;
};

export default PNumberText;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const StyledPrefix = styled('span')`
  margin-right: 2px;
`;

const StyledSuffix = styled('span')`
  margin-left: 2px;
`;
