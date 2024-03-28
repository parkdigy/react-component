import React from 'react';
import { PdgIconButtonProps as Props } from './PdgIconButton.types';
import { IconButton } from '@mui/material';
import PdgIcon from '../PdgIcon';

export const PdgIconButton: React.FC<Props> = ({ children, iconProps, ...props }) => {
  return (
    <IconButton {...props}>
      <PdgIcon {...iconProps}>{children}</PdgIcon>
    </IconButton>
  );
};

export type TPdgIconButton = typeof PdgIconButton;

export default PdgIconButton;
