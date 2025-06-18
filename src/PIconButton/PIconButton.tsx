import React from 'react';
import { PIconButtonProps as Props } from './PIconButton.types';
import { IconButton, Tooltip } from '@mui/material';
import PIcon from '../PIcon';
import classNames from 'classnames';
import { contains, ifUndefined } from '@pdg/compare';

export const PIconButton = React.forwardRef<HTMLButtonElement, Props>(
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
        className={classNames('PIconButton', className)}
        size={size}
        sx={{
          color: color ? undefined : initColor,
          width: fullWidth ? '100%' : undefined,
          ...initSx,
        }}
        {...props}
      >
        <PIcon
          {...iconProps}
          size={ifUndefined(iconSize, size)}
          className={classNames('PIconButton-Icon', iconProps?.className)}
        >
          {children}
        </PIcon>
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

export default React.memo(PIconButton);
