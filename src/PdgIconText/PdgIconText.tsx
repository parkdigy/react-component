/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgIconTextProps as Props } from './PdgIconText.types';
import { PdgIcon } from '../PdgIcon';
import classNames from 'classnames';
import { PdgText } from '../PdgText';
import { ifUndefined } from '@pdg/util';
import { PdgFlexRowBox } from '../PdgFlexRowBox';

const PdgIconText = React.forwardRef<HTMLSpanElement, Props>(
  (
    {
      children,
      className,
      color,
      icon,
      size,
      iconMarginRight,
      iconProps: initIconProps,
      textProps,
      helper,
      ...otherProps
    },
    ref
  ) => {
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

    const iconProps: Props['iconProps'] = useMemo(() => {
      return {
        ...initIconProps,
        color,
        size: size,
        style: {
          marginRight: iconMarginRight,
          ...initIconProps?.style,
        },
      };
    }, [initIconProps, color, iconMarginRight, size]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <PdgFlexRowBox
        inline
        center
        span
        ref={ref}
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
          helper={helper}
        >
          {children}
        </PdgText>
      </PdgFlexRowBox>
    );
  }
);

export default PdgIconText;
