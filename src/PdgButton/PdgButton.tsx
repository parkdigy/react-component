import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Box, Button, Typography } from '@mui/material';
import { PdgButtonProps as Props } from './PdgButton.types';
import PdgIcon from '../PdgIcon';

const PdgButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ size, children, className, icon, startIcon, endIcon, ...props }, ref) => {
    const fontSize = useMemo(
      () => (size === 'small' ? '0.75rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined),
      [size]
    );

    return (
      <Button ref={ref} size={size} className={classNames(className, 'PdgButton')} {...props}>
        <Box display='inline-flex' flexDirection='row' alignItems='center'>
          {(icon || startIcon) && (
            <PdgIcon
              className='PdgButton-StartIcon'
              size={size}
              color='inherit'
              sx={{ mr: children ? 0.5 : undefined }}
            >
              {icon || startIcon}
            </PdgIcon>
          )}
          <Typography style={{ fontSize }}>{children}</Typography>
          {endIcon && (
            <PdgIcon className='PdgButton-EndIcon' size={size} color='inherit' sx={{ ml: children ? 0.5 : undefined }}>
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
