import React from 'react';
import { PdgFlexCenterBoxProps as Props } from './PdgFlexCenterBox.types';
import { Box } from '@mui/material';

export const PdgFlexCenterBox: React.FC<Props> = ({ span, ...props }) => {
  return <Box component={span ? 'span' : 'div'} display='flex' alignItems='center' {...props} />;
};

export type TPdgFlexCenterBox = typeof PdgFlexCenterBox;

export default PdgFlexCenterBox;
