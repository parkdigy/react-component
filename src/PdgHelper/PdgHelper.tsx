import React, { CSSProperties, useMemo } from 'react';
import { PdgHelperProps as Props } from './PdgHelper.types';
import PdgIcon from '../PdgIcon';
import { ifUndefined } from '@pdg/util';
import { PdgFlexCenterBox } from '../PdgFlexCenterBox';

export const PdgHelper: React.FC<Props> = ({ text, icon, size, position, opacity, children, ...props }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

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

  const pdgIcon = useMemo(() => {
    if (!React.isValidElement(text) && !['string', 'number'].includes(typeof text)) return null;
    if (typeof text === 'string' && text === '') return null;

    const style: CSSProperties = { opacity };
    if (children) {
      if (position === 'left') {
        style.marginRight = '0.2em';
      } else {
        style.marginLeft = '0.2em';
      }
    }

    switch (size) {
      case 'inherit':
        style.fontSize = 'inherit';
        break;
      case 'small':
        style.fontSize = '0.9rem';
        break;
      case undefined:
      case 'medium':
        style.fontSize = '1.0rem';
        break;
      case 'large':
        style.fontSize = '1.4rem';
        break;
      default:
        style.fontSize = size;
        break;
    }

    return (
      <PdgFlexCenterBox>
        <PdgIcon size={size} style={style} tooltip={text} {...props}>
          {ifUndefined(icon, 'HelpOutline')}
        </PdgIcon>
      </PdgFlexCenterBox>
    );
  }, [children, icon, opacity, position, props, size, text]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return !children ? (
    pdgIcon
  ) : pdgIcon ? (
    <PdgFlexCenterBox span fontSize={fontSize}>
      {position === 'left' && pdgIcon}
      {children}
      {position !== 'left' && pdgIcon}
    </PdgFlexCenterBox>
  ) : (
    <>{children}</>
  );
};

export type TPdgHelper = typeof PdgHelper;

export default PdgHelper;
