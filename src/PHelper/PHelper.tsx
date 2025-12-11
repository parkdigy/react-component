import React, { CSSProperties } from 'react';
import { PHelperProps as Props } from './PHelper.types';
import PIcon from '../PIcon';
import { ifUndefined } from '@pdg/compare';
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

  const pdgIcon = (() => {
    if (!React.isValidElement(text) && !['string', 'number'].includes(typeof text)) return null;
    if (typeof text === 'string' && text === '') return null;

    const style: CSSProperties = { opacity };
    if (children) {
      if (position === 'left') {
        style.marginRight = '0.1em';
      } else {
        style.marginLeft = '0.1em';
      }
    }

    return (
      <PIcon
        className={classNames('PHelper-Icon', className)}
        size={size}
        style={{ ...style, ...initStyle }}
        sx={sx}
        tooltip={text}
        {...props}
      >
        {ifUndefined(icon, 'HelpOutline')}
      </PIcon>
    );
  })();

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
