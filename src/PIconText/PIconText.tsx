/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { PIconTextProps as Props } from './PIconText.types';
import { PIcon } from '../PIcon';
import classNames from 'classnames';
import { PText } from '../PText';
import { PFlexRowBox } from '../PFlexRowBox';

const PIconText = ({
  children,
  className,
  color,
  icon,
  size,
  iconMarginRight,
  iconProps: initIconProps,
  textProps,
  helper,
  ph,
  pv,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  ...otherProps
}: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const paddingProps: Pick<Props, 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingBottom'> = {
    paddingLeft: paddingLeft ?? ph,
    paddingRight: paddingRight ?? ph,
    paddingTop: paddingTop ?? pv,
    paddingBottom: paddingBottom ?? pv,
  };

  const fontSize = size === 'inherit' ? 'inherit' : size === 'small' ? '0.75rem' : size === 'large' ? '1.2rem' : size;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFlexRowBox
      inline
      center
      span
      className={classNames('PIconText', className)}
      fontSize={fontSize}
      {...paddingProps}
      {...otherProps}
    >
      {icon && (
        <>
          <PIcon
            {...initIconProps}
            color={color}
            size={size}
            style={{
              marginRight: iconMarginRight,
              ...initIconProps?.style,
            }}
            className={classNames('PIconText-Icon', initIconProps?.className)}
          >
            {icon}
          </PIcon>
          {iconMarginRight === undefined && <span style={{ fontSize: '0.4rem' }}>&nbsp;</span>}
        </>
      )}
      <PText
        {...textProps}
        className={classNames('PIconText-Text', textProps?.className)}
        size={textProps?.size ?? size}
        color={textProps?.color ?? color}
        helper={helper}
      >
        {children}
      </PText>
    </PFlexRowBox>
  );
};

export default PIconText;
