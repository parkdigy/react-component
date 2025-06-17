import React from 'react';
import { PdgIconButtonProps as Props } from './PdgIconButton.types';
import { IconButton, Tooltip } from '@mui/material';
import PdgIcon from '../PdgIcon';
import classNames from 'classnames';
import { contains, ifUndefined } from '@pdg/compare';

export const PdgIconButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      sx: initSx,
      size,
      color: initColor,
      iconSize,
      iconProps,
      tooltip,
      tooltipPlacement,
      tooltipProps,
      fullWidth,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const color = contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
      ? initColor
      : undefined;

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const content = (
      <IconButton
        ref={ref}
        color={color}
        className={classNames('PdgIconButton', className)}
        size={size}
        sx={{
          color: color ? undefined : initColor,
          width: fullWidth ? '100%' : undefined,
          ...initSx,
        }}
        {...props}
      >
        <PdgIcon
          {...iconProps}
          size={ifUndefined(iconSize, size)}
          className={classNames('PdgIconButton-Icon', iconProps?.className)}
        >
          {children}
        </PdgIcon>
      </IconButton>
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return tooltip ? (
      <Tooltip title={tooltip} placement={ifUndefined(tooltipPlacement, 'top')} arrow {...tooltipProps}>
        {content}
      </Tooltip>
    ) : (
      content
    );
  }
);

export default React.memo(PdgIconButton);
