/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PIconTextProps as Props } from './PIconText.types';
import { PIcon } from '../PIcon';
import classNames from 'classnames';
import { PText } from '../PText';
import { ifUndefined } from '@pdg/compare';
import { PFlexRowBox } from '../PFlexRowBox';

const PIconText = React.forwardRef<HTMLSpanElement, Props>(
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
      <PFlexRowBox
        inline
        center
        span
        ref={ref}
        className={classNames('PIconText', className)}
        fontSize={size === 'inherit' ? 'inherit' : size === 'small' ? '0.75rem' : size === 'large' ? '1.2rem' : size}
        {...props}
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
          size={ifUndefined(textProps?.size, size)}
          color={ifUndefined(textProps?.color, color)}
          helper={helper}
        >
          {children}
        </PText>
      </PFlexRowBox>
    );
  }
);

export default React.memo(PIconText);
