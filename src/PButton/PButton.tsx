import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { Button, darken, SxProps, Theme, Tooltip } from '@mui/material';
import { PButtonProps as Props } from './PButton.types';
import PIcon from '../PIcon';
import { contains } from '@pdg/compare';
import { PFlexRowBox } from '../PFlexRowBox';

const NamedColors = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'] as const;

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
  tooltipPlacement,
  tooltipProps,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Style
   * ******************************************************************************************************************/

  const style: React.CSSProperties = {
    ...initStyle,
    paddingLeft: initStyle?.paddingLeft ?? ph,
    paddingRight: initStyle?.paddingRight ?? ph,
    paddingTop: initStyle?.paddingTop ?? pv,
    paddingBottom: initStyle?.paddingBottom ?? pv,
    marginLeft: initStyle?.marginLeft ?? mh,
    marginRight: initStyle?.marginRight ?? mh,
    marginTop: initStyle?.marginTop ?? mv,
    marginBottom: initStyle?.marginBottom ?? mv,
  };

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const color = contains(NamedColors, initColor) ? initColor : undefined;

  const sx: SxProps<Theme> =
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
        };

  const startIconStyle: CSSProperties = {
    marginLeft: startIconMarginLeft ?? (variant !== 'text' && children ? '-0.15em' : undefined),
    marginRight: startIconMarginRight ?? (children ? '0.2em' : undefined),
    ...startIconProps?.style,
  };

  const childrenContainerStyle: CSSProperties = {
    fontSize: size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined,
  };

  const endIconStyle: CSSProperties = {
    marginLeft: endIconMarginLeft ?? (children ? '0.2em' : undefined),
    marginRight: endIconMarginRight ?? (variant !== 'text' && children ? '-0.15em' : undefined),
    ...endIconProps?.style,
  };

  /********************************************************************************************************************
   * content
   * ******************************************************************************************************************/

  const content = (
    <Button
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      className={classNames(className, 'PButton')}
      style={style}
      sx={sx}
      {...props}
    >
      <PFlexRowBox center inline nowrap>
        {startIcon && (
          <PIcon className='PButton-StartIcon' size={size} style={startIconStyle} {...startIconProps}>
            {startIcon}
          </PIcon>
        )}
        <div style={childrenContainerStyle}>{children}</div>
        {endIcon && (
          <PIcon className='PButton-EndIcon' size={size} style={endIconStyle} {...endIconProps}>
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
    <Tooltip title={tooltip} placement={tooltipPlacement ?? 'top'} arrow {...tooltipProps}>
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export default PButton;
