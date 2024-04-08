import React, { useMemo } from 'react';
import { PdgReactCodeProps as Props } from './PdgReactCode.types';
import { Box, styled } from '@mui/material';
import { Dict } from '@pdg/util';

const makeObjectValue = (value: Dict): string => {
  return Object.keys(value)
    .map((key) => {
      const v = value[key];
      if (v != null) {
        if (v instanceof Text) {
          return `${key}: {${v.data}}`;
        } else if (typeof v === 'string') {
          return `${key}: "${v}"`;
        } else if (typeof v === 'object') {
          return `${key}: {${makeObjectValue(v)}}`;
        } else {
          return `${key}: {${v}}`;
        }
      }
    })
    .filter((v) => v != null)
    .join(', ');
};

export const PdgReactCode: React.FC<Props> = ({ name, content, props, ...boxProps }) => {
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

  return (
    <StyledBox {...boxProps}>
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

export type TPdgReactCode = typeof PdgReactCode;

export default PdgReactCode;

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
