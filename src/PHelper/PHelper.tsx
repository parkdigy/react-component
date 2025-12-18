import React, { CSSProperties } from 'react';
import { PHelperProps as Props } from './PHelper.types';
import PIcon from '../PIcon';
import { PFlexRowBox } from '../PFlexRowBox';
import classNames from 'classnames';

export const PHelper = ({
  className,
  style: initStyle,
  sx,
  text,
  icon,
  size,
  position,
  opacity,
  children,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const hasText = (typeof text === 'string' && text !== '') || typeof text === 'number' || React.isValidElement(text);

  const style: CSSProperties = { opacity };
  if (hasText && children) {
    if (position === 'left') {
      style.marginRight = '0.1em';
    } else {
      style.marginLeft = '0.1em';
    }
  }

  const pdgIcon = hasText ? (
    <PIcon
      className={classNames('PHelper-Icon', className)}
      size={size}
      style={{ ...style, ...initStyle }}
      sx={sx}
      tooltip={text}
      {...props}
    >
      {icon ?? 'HelpOutline'}
    </PIcon>
  ) : null;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return !children ? (
    pdgIcon
  ) : pdgIcon ? (
    <PFlexRowBox inline center span className='PHelper'>
      {position === 'left' && pdgIcon}
      {children}
      {position !== 'left' && pdgIcon}
    </PFlexRowBox>
  ) : (
    <>{children}</>
  );
};

export default PHelper;
