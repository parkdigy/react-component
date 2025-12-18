import React from 'react';
import { PTextProps as Props } from './PText.types';
import { Typography, useTheme } from '@mui/material';
import classNames from 'classnames';
import { PHelper, PHelperProps } from '../PHelper';

export const PText = ({
  display = 'inline-block',
  line,
  center,
  className,
  size,
  color,
  helper,
  ph,
  pv,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  mh,
  mv,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  fullSize,
  fullWidth,
  fullHeight,
  width,
  height,
  children,
  ...initProps
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * props
   * ******************************************************************************************************************/

  const finalColor = (() => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'error':
        return theme.palette.error.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'info':
        return theme.palette.info.main;
      case 'success':
        return theme.palette.success.main;
      default:
        return color;
    }
  })();

  const fontSize = (() => {
    switch (size) {
      case 'inherit':
        return 'inherit';
      case 'small':
        return '0.75rem';
      case 'medium':
        return undefined;
      case 'large':
        return '1.2rem';
      default:
        return size;
    }
  })();

  const props: Props = {
    ...initProps,
    textAlign: center ? 'center' : initProps.textAlign,
    paddingLeft: paddingLeft ?? ph,
    paddingRight: paddingRight ?? ph,
    paddingTop: paddingTop ?? pv,
    paddingBottom: paddingBottom ?? pv,
    marginLeft: marginLeft ?? mh,
    marginRight: marginRight ?? mh,
    marginTop: marginTop ?? mv,
    marginBottom: marginBottom ?? mv,
    width: fullWidth || fullSize ? '100%' : width,
    height: fullHeight || fullSize ? '100%' : height,
    style: {
      ...initProps?.style,
      fontSize: fontSize ?? initProps?.style?.fontSize,
      color: finalColor ?? initProps?.style?.color,
    },
  };

  /********************************************************************************************************************
   * content
   * ******************************************************************************************************************/

  const content = (
    <Typography display={line ? 'block' : display} className={classNames('PText', className)} {...props}>
      {children}
    </Typography>
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return helper ? (
    typeof helper === 'object' && Object.keys(helper).includes('text') ? (
      <PHelper size={size} color={color} {...(helper as PHelperProps)}>
        {content}
      </PHelper>
    ) : (
      <PHelper text={helper as any}>{content}</PHelper>
    )
  ) : (
    content
  );
};

export default PText;
