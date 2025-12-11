import React, { useMemo } from 'react';
import { PTextProps as Props } from './PText.types';
import { Typography, useTheme } from '@mui/material';
import classNames from 'classnames';
import { PHelper, PHelperProps } from '../PHelper';

export const PText: React.FC<Props> = ({
  display = 'inline-block',
  line,
  center,
  className,
  size,
  color,
  helper,
  ph,
  pv,
  mh,
  mv,
  fullWidth,
  fullHeight,
  fullSize,
  children,
  ...initProps
}) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const props: Props = useMemo(() => {
    const newTextProps = {
      ...initProps,
      style: {
        ...initProps?.style,
      },
    };
    if (size) {
      switch (size) {
        case 'inherit':
          newTextProps.style.fontSize = 'inherit';
          break;
        case 'small':
          newTextProps.style.fontSize = '0.75rem';
          break;
        case 'medium':
          break;
        case 'large':
          newTextProps.style.fontSize = '1.2rem';
          break;
        default:
          newTextProps.style.fontSize = size;
          break;
      }
    }
    switch (color) {
      case 'primary':
        newTextProps.style.color = theme.palette.primary.main;
        break;
      case 'secondary':
        newTextProps.style.color = theme.palette.secondary.main;
        break;
      case 'error':
        newTextProps.style.color = theme.palette.error.main;
        break;
      case 'warning':
        newTextProps.style.color = theme.palette.warning.main;
        break;
      case 'info':
        newTextProps.style.color = theme.palette.info.main;
        break;
      case 'success':
        newTextProps.style.color = theme.palette.success.main;
        break;
      default:
        newTextProps.style.color = color;
    }

    if (ph !== undefined) {
      newTextProps.paddingLeft = ph;
      newTextProps.paddingRight = ph;
    }
    if (pv !== undefined) {
      newTextProps.paddingTop = pv;
      newTextProps.paddingBottom = pv;
    }
    if (mh !== undefined) {
      newTextProps.marginLeft = mh;
      newTextProps.marginRight = mh;
    }
    if (mv !== undefined) {
      newTextProps.marginTop = mv;
      newTextProps.marginBottom = mv;
    }
    if (center) {
      newTextProps.textAlign = 'center';
    }
    if (fullWidth || fullSize) {
      newTextProps.width = '100%';
    }
    if (fullHeight || fullSize) {
      newTextProps.height = '100%';
    }
    return newTextProps;
  }, [
    center,
    color,
    fullHeight,
    fullSize,
    fullWidth,
    initProps,
    mh,
    mv,
    ph,
    pv,
    size,
    theme.palette.error.main,
    theme.palette.info.main,
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.warning.main,
  ]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (() => {
    const content = (
      <Typography display={line ? 'block' : display} className={classNames('PText', className)} {...props}>
        {children}
      </Typography>
    );

    if (!helper) return content;

    if (typeof helper === 'object' && Object.keys(helper).includes('text')) {
      return (
        <PHelper size={size} color={color} {...(helper as PHelperProps)}>
          {content}
        </PHelper>
      );
    } else {
      return <PHelper text={helper as any}>{content}</PHelper>;
    }
  })();
};

export default React.memo(PText);
