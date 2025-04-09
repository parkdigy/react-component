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
      ph,
      pv,
      ...otherProps
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const props: Props = useMemo(() => {
      const newProps: Props = { ...otherProps };
      if (ph !== undefined) {
        newProps.paddingLeft = ph;
        newProps.paddingRight = ph;
      }
      if (pv !== undefined) {
        newProps.paddingTop = pv;
        newProps.paddingBottom = pv;
      }
      return newProps;
    }, [otherProps, ph, pv]);

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
        fontSize={size === 'inherit' ? 'inherit' : size === 'small' ? '0.75rem' : size === 'large' ? '1.2rem' : size}
        {...props}
      >
        {icon && (
          <>
            <PdgIcon
              {...initIconProps}
              color={color}
              size={size}
              style={{
                marginRight: iconMarginRight,
                ...initIconProps?.style,
              }}
              className={classNames('PdgIconText-Icon', initIconProps?.className)}
            >
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

export default React.memo(PdgIconText);
