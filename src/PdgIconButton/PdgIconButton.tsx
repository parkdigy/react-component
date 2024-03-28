import React from 'react';
import { PdgIconButtonProps as Props } from './PdgIconButton.types';
import { IconButton } from '@mui/material';
import PdgIcon from '../PdgIcon';
import classNames from 'classnames';

export const PdgIconButton: React.FC<Props> = ({ children, className, iconProps, ...props }) => {
  return (
    <IconButton className={classNames('PdgIconButton', className)} {...props}>
      <PdgIcon {...iconProps} className={classNames('PdgIconButton-Icon', iconProps?.className)}>
        {children}
      </PdgIcon>
    </IconButton>
  );
};

export type TPdgIconButton = typeof PdgIconButton;

export default PdgIconButton;
