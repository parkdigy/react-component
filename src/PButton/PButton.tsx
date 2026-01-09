import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Button, darken, Tooltip } from '@mui/material';
import { type PButtonProps as Props } from './PButton.types';
import PIcon from '../PIcon';
import { contains } from '@pdg/compare';
import { PFlexRowBox } from '../PFlexRowBox';

const NamedColor = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'] as const;

const PButton = ({
  variant,
  size,
  children,
  className,
  ph,
  pv,
  mh,
  mv,
  style: initStyle,
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
  tooltipPlacement = 'top',
  tooltipProps,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => {
    const newStyle: React.CSSProperties = {
      ...initStyle,
    };
    if (ph !== undefined) {
      newStyle.paddingLeft = ph;
      newStyle.paddingRight = ph;
    }
    if (pv !== undefined) {
      newStyle.paddingTop = pv;
      newStyle.paddingBottom = pv;
    }
    if (mh !== undefined) {
      newStyle.marginLeft = mh;
      newStyle.marginRight = mh;
    }
    if (mv !== undefined) {
      newStyle.marginTop = mv;
      newStyle.marginBottom = mv;
    }
    return newStyle;
  }, [initStyle, mh, mv, ph, pv]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const color = contains(NamedColor, initColor) ? initColor : undefined;

  const content = (
    <Button
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      className={classNames(className, 'PButton')}
      style={style}
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
      <PFlexRowBox center inline nowrap>
        {startIcon && (
          <PIcon
            className='PButton-StartIcon'
            size={size}
            style={{
              marginLeft: startIconMarginLeft ?? (variant !== 'text' && children ? '-0.15em' : undefined),
              marginRight: startIconMarginRight ?? (children ? '0.2em' : undefined),
              ...startIconProps?.style,
            }}
            {...startIconProps}
          >
            {startIcon}
          </PIcon>
        )}
        <div
          style={{
            fontSize:
              size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined,
          }}
        >
          {children}
        </div>
        {endIcon && (
          <PIcon
            className='PButton-EndIcon'
            size={size}
            style={{
              marginLeft: endIconMarginLeft ?? (children ? '0.2em' : undefined),
              marginRight: endIconMarginRight ?? (variant !== 'text' && children ? '-0.15em' : undefined),
              ...endIconProps?.style,
            }}
            {...endIconProps}
          >
            {endIcon}
          </PIcon>
        )}
      </PFlexRowBox>
    </Button>
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

export default PButton;
