import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Button, darken, Tooltip } from '@mui/material';
import { PdgButtonProps as Props } from './PdgButton.types';
import PdgIcon from '../PdgIcon';
import { ifUndefined } from '@pdg/util';
import { PdgText } from '../PdgText';
import { PdgFlexRowBox } from '../PdgFlexRowBox';

const PdgButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant,
      size,
      children,
      className,
      sx: initSx,
      color: initColor,
      icon,
      iconProps,
      startIcon,
      startIconProps,
      endIcon,
      endIconProps,
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

    const fontSize = useMemo(
      () => (size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined),
      [size]
    );

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

    const sx = useMemo(() => {
      return variant === 'contained'
        ? {
            ...initSx,
            color: '#fff',
            backgroundColor: color ? undefined : initColor,
            '&:hover': {
              color: '#fff',
              backgroundColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
            },
          }
        : {
            ...initSx,
            color: color ? undefined : initColor,
            borderColor: color ? undefined : initColor,
            '&:hover': {
              borderColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
            },
          };
    }, [color, initColor, initSx, variant]);

    const iconTextColor = useMemo(
      () => (variant === 'contained' ? '#fff' : ifUndefined(initColor, 'inherit')),
      [initColor, variant]
    );

    const content = useMemo(
      () => (
        <Button
          ref={ref}
          variant={variant}
          size={size}
          color={color}
          className={classNames(className, 'PdgButton')}
          sx={sx}
          {...props}
        >
          <PdgFlexRowBox center inline>
            {(icon || startIcon) && (
              <PdgIcon
                className='PdgButton-StartIcon'
                size={size}
                color={iconTextColor}
                sx={{ mr: children ? 0.5 : undefined }}
                {...(iconProps || startIconProps)}
              >
                {icon || startIcon}
              </PdgIcon>
            )}
            <PdgText color={iconTextColor} style={{ fontSize }}>
              {children}
            </PdgText>
            {endIcon && (
              <PdgIcon
                className='PdgButton-EndIcon'
                size={size}
                color={iconTextColor}
                sx={{ ml: children ? 0.5 : undefined }}
                {...endIconProps}
              >
                {endIcon}
              </PdgIcon>
            )}
          </PdgFlexRowBox>
        </Button>
      ),
      [
        children,
        className,
        color,
        endIcon,
        endIconProps,
        fontSize,
        icon,
        iconProps,
        iconTextColor,
        props,
        ref,
        size,
        startIcon,
        startIconProps,
        sx,
        variant,
      ]
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

PdgButton.displayName = 'PdgButton';

export default PdgButton;
