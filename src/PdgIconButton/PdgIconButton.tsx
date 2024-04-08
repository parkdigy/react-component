import React, { useMemo } from 'react';
import { PdgIconButtonProps as Props } from './PdgIconButton.types';
import { IconButton, Tooltip } from '@mui/material';
import PdgIcon from '../PdgIcon';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';

export const PdgIconButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      size,
      color: initColor,
      iconSize,
      iconProps,
      tooltip,
      tooltipPlacement,
      tooltipProps,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const color = useMemo(() => {
      switch (initColor) {
        case 'inherit':
        case 'primary':
        case 'secondary':
        case 'error':
        case 'info':
        case 'success':
        case 'warning':
          return initColor;
      }
    }, [initColor]);

    const content = useMemo(
      () => (
        <IconButton ref={ref} color={color} className={classNames('PdgIconButton', className)} size={size} {...props}>
          <PdgIcon
            {...iconProps}
            color={initColor}
            size={ifUndefined(iconSize, size)}
            className={classNames('PdgIconButton-Icon', iconProps?.className)}
          >
            {children}
          </PdgIcon>
        </IconButton>
      ),
      [children, className, color, iconProps, iconSize, initColor, props, ref, size]
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

export type TPdgIconButton = typeof PdgIconButton;

export default PdgIconButton;
