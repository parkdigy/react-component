import React from 'react';
import { PdgIconButtonProps as Props } from './PdgIconButton.types';
import { IconButton } from '@mui/material';
import PdgIcon from '../PdgIcon';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';

export const PdgIconButton: React.FC<Props> = ({ children, className, size, iconSize, iconProps, ...props }) => {
  return (
    <IconButton className={classNames('PdgIconButton', className)} size={size} {...props}>
      <PdgIcon
        {...iconProps}
        size={ifUndefined(iconSize, size)}
        className={classNames('PdgIconButton-Icon', iconProps?.className)}
      >
        {children}
      </PdgIcon>
    </IconButton>
  );
};

export type TPdgIconButton = typeof PdgIconButton;

export default PdgIconButton;
