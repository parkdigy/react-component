/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgNumberTextProps as Props } from './PdgNumberText.types';
import { styled } from '@mui/material';
import classNames from 'classnames';
import { numberFormat } from '@pdg/util';

const PdgNumberText: React.FC<Props> = ({
  className,
  value,
  decimalOpacity,
  prefix,
  prefixOpacity,
  suffix,
  suffixOpacity,
}) => {
  const formattedValue = useMemo(() => (value != null ? numberFormat(value) : null), [value]);
  const integerValue = useMemo(() => formattedValue?.split('.')[0], [formattedValue]);
  const decimalValue = useMemo(() => formattedValue?.split('.')[1], [formattedValue]);

  return integerValue != undefined ? (
    <span className={classNames('PdgNumberText', className)}>
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
        <span className='PdgNumberText-Decimal' style={{ opacity: decimalOpacity === undefined ? 1 : decimalOpacity }}>
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
    </span>
  ) : null;
};

export default PdgNumberText;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const StyledPrefix = styled('span')`
  margin-right: 2px;
`;

const StyledSuffix = styled('span')`
  margin-left: 2px;
`;
