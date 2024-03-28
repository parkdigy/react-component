import React from 'react';
import classNames from 'classnames';
import { Box, Button } from '@mui/material';
import { PdgButtonProps as Props } from './PdgButton.types';
import PdgIcon from '../PdgIcon';

const PdgButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ size, children, className, icon, startIcon, endIcon, ...props }, ref) => {
    return (
      <Button ref={ref} size={size} className={classNames(className, 'PdgButton')} {...props}>
        <Box display='inline-flex' flexDirection='row' alignItems='center'>
          {(icon || startIcon) && (
            <PdgIcon
              className='PdgButton-StartIcon'
              fontSize={size}
              color='inherit'
              sx={{ mr: children ? 0.5 : undefined }}
            >
              {icon || startIcon}
            </PdgIcon>
          )}
          {children}
          {endIcon && (
            <PdgIcon
              className='PdgButton-EndIcon'
              fontSize={size}
              color='inherit'
              sx={{ ml: children ? 0.5 : undefined }}
            >
              {endIcon}
            </PdgIcon>
          )}
        </Box>
      </Button>
    );
  }
);

PdgButton.displayName = 'PdgButton';

export default PdgButton;
