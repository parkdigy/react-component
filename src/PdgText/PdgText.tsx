import React, { useMemo } from 'react';
import { PdgTextProps as Props } from './PdgText.types';
import { Typography, useTheme } from '@mui/material';
import classNames from 'classnames';

export const PdgText: React.FC<Props> = ({ className, size, color, ...initProps }) => {
  const theme = useTheme();

  const fontSize = useMemo(() => {
    switch (size) {
      case 'inherit':
        return 'inherit';
      case 'small':
        return '0.75rem';
      case 'medium':
        break;
      case 'large':
        return '1.2rem';
      default:
        return size;
    }
  }, [size]);

  const props: Props = useMemo(() => {
    const newTextProps = {
      ...initProps,
      style: {
        ...initProps?.style,
      },
    };
    if (!initProps?.fontSize && fontSize) {
      newTextProps.style.fontSize = fontSize;
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
    return newTextProps;
  }, [
    initProps,
    fontSize,
    color,
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.success.main,
  ]);

  return <Typography className={classNames('PdgText', className)} display='inline-block' {...props} />;
};

export type TPdgText = typeof PdgText;

export default PdgText;
