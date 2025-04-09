import React, { useMemo } from 'react';
import { PdgTextProps as Props } from './PdgText.types';
import { Typography, useTheme } from '@mui/material';
import classNames from 'classnames';
import { PdgHelper, PdgHelperProps } from '../PdgHelper';

export const PdgText: React.FC<Props> = ({
  display = 'inline-block',
  line,
  className,
  size,
  color,
  helper,
  ph,
  pv,
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

    return newTextProps;
  }, [
    color,
    initProps,
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
      <Typography display={line ? 'block' : display} className={classNames('PdgText', className)} {...props}>
        {children}
      </Typography>
    );

    if (!helper) return content;

    if (typeof helper === 'object' && Object.keys(helper).includes('text')) {
      return (
        <PdgHelper size={size} color={color} {...(helper as PdgHelperProps)}>
          {content}
        </PdgHelper>
      );
    } else {
      return <PdgHelper text={helper as any}>{content}</PdgHelper>;
    }
  })();
};

export default React.memo(PdgText);
