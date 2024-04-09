import React, { CSSProperties, useMemo } from 'react';
import { PdgHelperProps as Props } from './PdgHelper.types';
import PdgIcon from '../PdgIcon';
import { ifUndefined } from '@pdg/util';
import { PdgFlexRowBox } from '../PdgFlexRowBox';
import classNames from 'classnames';

export const PdgHelper: React.FC<Props> = ({
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
}) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const pdgIcon = useMemo(() => {
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
      <PdgIcon
        className={classNames('PdgHelper-Icon', className)}
        size={size}
        style={{ ...style, ...initStyle }}
        sx={sx}
        tooltip={text}
        {...props}
      >
        {ifUndefined(icon, 'HelpOutline')}
      </PdgIcon>
    );
  }, [children, className, icon, initStyle, opacity, position, props, size, sx, text]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return !children ? (
    pdgIcon
  ) : pdgIcon ? (
    <PdgFlexRowBox inline center span className='PdgHelper'>
      {position === 'left' && pdgIcon}
      {children}
      {position !== 'left' && pdgIcon}
    </PdgFlexRowBox>
  ) : (
    <>{children}</>
  );
};

export type TPdgHelper = typeof PdgHelper;

export default PdgHelper;
