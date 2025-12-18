import React from 'react';
import { ControlBarRowDividerProps as Props } from './ControlBarRowDivider.types';
import { Box, styled } from '@mui/material';

export const ControlBarRowDivider = ({}: Props) => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default ControlBarRowDivider;

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

const Container = styled(Box)`
  padding: 5px 0;
  width: 100%;
`;

const Line = styled('div')`
  height: 1px;
  background-color: #efefef;
  width: 100%;
`;
