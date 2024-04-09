import React, { useMemo } from 'react';
import { PdgTextProps as Props } from './PdgText.types';
import { useTheme } from '@mui/material';
import classNames from 'classnames';
import { PdgHelper, PdgHelperProps } from '../PdgHelper';

export const PdgText: React.FC<Props> = ({ className, size, color, helper, children, ...initProps }) => {
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
    return newTextProps;
  }, [
    initProps,
    size,
    color,
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.success.main,
  ]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return useMemo(() => {
    const content = (
      <span className={classNames('PdgText', className)} {...props}>
        {children}
      </span>
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
  }, [children, className, color, helper, props, size]);
};

export type TPdgText = typeof PdgText;

export default PdgText;
