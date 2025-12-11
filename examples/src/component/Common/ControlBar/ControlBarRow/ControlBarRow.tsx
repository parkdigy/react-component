import React from 'react';
import { ControlBarRowProps as Props } from './ControlBarRow.types';
import { Box, styled } from '@mui/material';

export const ControlBarRow: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export type TControlBarRow = typeof ControlBarRow;

export default ControlBarRow;

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;
