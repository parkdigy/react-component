import { Box, styled } from '@mui/material';
import React from 'react';
import { ControlBarProps as Props } from './ControlBar.types';

export const ControlBar: React.FC<Props> = (props) => {
  return <Container {...props}></Container>;
};

export type TControlBar = typeof ControlBar;

export default ControlBar;

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: 1px solid #efefef;
  border-radius: 5px;
`;
