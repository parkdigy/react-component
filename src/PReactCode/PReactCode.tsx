import React from 'react';
import { PReactCodeProps as Props } from './PReactCode.types';
import { Box, styled } from '@mui/material';
import classNames from 'classnames';
import { makeObjectValue } from './PReactCode.function.private';

export const PReactCode = ({ className, name, content, props, ...boxProps }: Props) => {
  /********************************************************************************************************************
   * finalProps
   * ******************************************************************************************************************/

  const finalProps = props
    ? Object.entries(props).reduce<{ key: string; value: string }[]>((acc, [key, value]) => {
        if (value == null) return acc;

        let formattedValue: string;

        if (value instanceof Text) {
          formattedValue = `{${value.data}}`;
        } else if (typeof value === 'string') {
          formattedValue = `"${value}"`;
        } else if (typeof value === 'object') {
          formattedValue = `{${makeObjectValue(value)}}`;
        } else {
          formattedValue = `{${value}}`;
        }

        acc.push({ key, value: formattedValue });
        return acc;
      }, [])
    : undefined;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledBox className={classNames('PReactCode', className)} {...boxProps}>
      {`<${name}`}
      {finalProps?.map((info) => (
        <span key={info.key}>
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
