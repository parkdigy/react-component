import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Button, darken, Tooltip } from '@mui/material';
import { PdgButtonProps as Props } from './PdgButton.types';
import PdgIcon from '../PdgIcon';
import { contains, ifUndefined } from '@pdg/util';
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
      disabled,
      startIcon,
      startIconMarginLeft,
      startIconMarginRight,
      startIconProps,
      endIcon,
      endIconMarginLeft,
      endIconMarginRight,
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

    const fontSize =
      size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined;

    const color =
      initColor &&
      contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'] as const, initColor)
        ? initColor
        : undefined;

    // const color = useMemo(() => {
    //   switch (initColor) {
    //     case 'inherit':
    //     case 'primary':
    //     case 'secondary':
    //     case 'error':
    //     case 'info':
    //     case 'success':
    //     case 'warning':
    //       return initColor;
    //   }
    // }, [initColor]);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const content = (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        className={classNames(className, 'PdgButton')}
        sx={
          variant === 'contained'
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
              }
        }
        {...props}
      >
        <PdgFlexRowBox center inline nowrap>
          {startIcon && (
            <PdgIcon
              className='PdgButton-StartIcon'
              size={size}
              style={{
                marginLeft: ifUndefined(startIconMarginLeft, variant !== 'text' && children ? '-0.15em' : undefined),
                marginRight: ifUndefined(startIconMarginRight, children ? '0.2em' : undefined),
                ...startIconProps?.style,
              }}
              {...startIconProps}
            >
              {startIcon}
            </PdgIcon>
          )}
          <PdgText style={{ fontSize }}>{children}</PdgText>
          {endIcon && (
            <PdgIcon
              className='PdgButton-EndIcon'
              size={size}
              style={{
                marginLeft: ifUndefined(endIconMarginLeft, children ? '0.2em' : undefined),
                marginRight: ifUndefined(endIconMarginRight, variant !== 'text' && children ? '-0.15em' : undefined),
                ...endIconProps?.style,
              }}
              {...endIconProps}
            >
              {endIcon}
            </PdgIcon>
          )}
        </PdgFlexRowBox>
      </Button>
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

export default React.memo(PdgButton);
