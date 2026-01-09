import React, { useMemo } from 'react';
import { type PIconButtonProps as Props } from './PIconButton.types';
import { IconButton, Tooltip } from '@mui/material';
import PIcon from '../PIcon';
import classNames from 'classnames';
import { contains } from '@pdg/compare';

const NamedColor = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'] as const;

export const PIconButton = ({
  children,
  className,
  sx: initSx,
  size,
  color: initColor,
  iconSize,
  iconProps,
  tooltip,
  tooltipPlacement = 'top',
  tooltipProps,
  fullWidth,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const color = contains(NamedColor, initColor) ? initColor : undefined;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const content = useMemo(
    () => (
      <IconButton
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
        <PIcon {...iconProps} size={iconSize ?? size} className={classNames('PIconButton-Icon', iconProps?.className)}>
          {children}
        </PIcon>
      </IconButton>
    ),
    [children, className, color, fullWidth, iconProps, iconSize, initColor, initSx, props, size]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return tooltip ? (
    <Tooltip title={tooltip} placement={tooltipPlacement} arrow {...tooltipProps}>
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export default PIconButton;
