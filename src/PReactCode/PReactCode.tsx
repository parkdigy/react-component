import React, { useMemo } from 'react';
import { PReactCodeProps as Props } from './PReactCode.types';
import { Box, styled } from '@mui/material';
import classNames from 'classnames';
import { makeObjectValue } from './PReactCode.function.private';

export const PReactCode = ({ className, name, content, props, ...boxProps }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const finalProps = useMemo(() => {
    if (props) {
      const result: { key: string; value: string }[] = [];
      Object.keys(props).forEach((key) => {
        const value = props[key];
        if (value != null) {
          if (value instanceof Text) {
            result.push({ key, value: `{${value.data}}` });
          } else if (typeof value === 'string') {
            result.push({ key, value: `"${value}"` });
          } else if (typeof value === 'object') {
            result.push({ key, value: `{${makeObjectValue(value)}}` });
          } else {
            result.push({ key, value: `{${value}}` });
          }
        }
      });
      return result;
    }
  }, [props]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledBox className={classNames('PReactCode', className)} {...boxProps}>
      {`<${name}`}
      {finalProps &&
        finalProps.map((info, idx) => (
          <span key={idx}>
            &nbsp;
            <span style={{ fontWeight: 'bold' }}>{info.key}</span>=<span style={{ color: 'yellow' }}>{info.value}</span>
          </span>
        ))}
      {content ? (
        <>
          &gt;<span style={{ color: 'yellow' }}>{`${content}`}</span>
          {`</${name}>`}
        </>
      ) : (
        ` />`
      )}
    </StyledBox>
  );
};

export default PReactCode;

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

const StyledBox = styled(Box)`
  margin-top: 20px;
  font-size: 13px;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  padding: 10px 13px;
  opacity: 0.7;
`;
