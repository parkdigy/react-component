/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgIconTextProps as Props } from './PdgIconText.types';
import { PdgIcon, PdgIconProps } from '../PdgIcon';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { PdgText } from '../PdgText';
import { ifUndefined } from '@pdg/util';

const PdgIconText: React.FC<Props> = ({
  children,
  className,
  color,
  icon,
  size,
  iconMarginRight,
  iconProps: initIconProps,
  textProps,
  ...otherProps
}) => {
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

  const iconProps: PdgIconProps = useMemo(() => {
    const newIconProps = {
      ...initIconProps,
      style: {
        marginRight: iconMarginRight,
        ...initIconProps?.style,
      },
    };
    switch (size) {
      case 'inherit':
        newIconProps.style.fontSize = 'inherit';
        break;
      case 'small':
        newIconProps.style.fontSize = '0.9rem';
        break;
      case undefined:
      case 'medium':
        newIconProps.style.fontSize = '1.1rem';
        break;
      case 'large':
        newIconProps.style.fontSize = '1.4rem';
        break;
      default:
        newIconProps.style.fontSize = size;
        break;
    }
    switch (color) {
      case 'primary':
      case 'secondary':
      case 'error':
      case 'warning':
      case 'info':
      case 'success':
        newIconProps.color = color;
        break;
      default:
        newIconProps.style.color = color;
    }
    return newIconProps;
  }, [color, initIconProps, iconMarginRight, size]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Box
      display='inline-flex'
      alignItems='center'
      className={classNames('PdgIconText', className)}
      fontSize={fontSize}
      {...otherProps}
    >
      {icon && (
        <>
          <PdgIcon {...iconProps} className={classNames('PdgIconText-Icon', iconProps?.className)}>
            {icon}
          </PdgIcon>
          {iconMarginRight === undefined && <span style={{ fontSize: '0.4rem' }}>&nbsp;</span>}
        </>
      )}
      <PdgText
        {...textProps}
        className={classNames('PdgIconText-Text', textProps?.className)}
        size={ifUndefined(textProps?.size, size)}
        color={ifUndefined(textProps?.color, color)}
      >
        {children}
      </PdgText>
    </Box>
  );
};

export default PdgIconText;
