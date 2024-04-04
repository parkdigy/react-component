import React, { useMemo } from 'react';
import { CodeProps as Props } from './Code.types';
import { Box, styled } from '@mui/material';

export const Code: React.FC<Props> = ({ name, content, props, ...boxProps }) => {
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

export type TCode = typeof Code;

export default Code;

const StyledBox = styled(Box)`
  margin-top: 20px;
  font-size: 13px;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  padding: 10px 13px;
  opacity: 0.7;
`;
