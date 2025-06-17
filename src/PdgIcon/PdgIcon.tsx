/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/

import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { Icon, IconProps, Tooltip } from '@mui/material';
import { PdgIconProps as Props } from './PdgIcon.types';
import classNames from 'classnames';
import { contains, ifUndefined } from '@pdg/compare';
import { finalStyleFontSize, getParentSize } from './PdgIcon.function.private';

const PdgIcon = React.forwardRef<HTMLSpanElement, Props>(
  (
    {
      className,
      children: InitChildren,
      style: initStyle,
      size,
      color,
      tooltip,
      tooltipPlacement,
      tooltipProps,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLSpanElement | null>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [styleFontSize, setStyleFontSize] = useState<string | number>();

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (contains(['large', 'medium', 'small'] as const, size)) {
        setStyleFontSize(undefined);
      } else {
        resetStyleFontSize();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const iconFontSize = contains(['large', 'medium', 'small'] as const, size)
      ? (size as IconProps['fontSize'])
      : undefined;

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const resetStyleFontSize = useCallback(() => {
      const el = innerRef.current;
      if (el && iconFontSize === undefined) {
        let sizeValue: number | undefined = undefined;
        let sizeUnit: string | undefined = undefined;

        if (size === 'inherit') {
          const parentSize = getParentSize(el);
          if (parentSize) {
            sizeValue = parentSize.sizeValue;
            sizeUnit = parentSize.sizeUnit;
          }
        } else if (typeof size === 'number') {
          sizeValue = size;
          sizeUnit = 'px';
        } else if (typeof size === 'string') {
          sizeValue = parseFloat(size);
          sizeUnit = size.replace(sizeValue.toString(), '');
        }

        if (sizeValue && sizeUnit) {
          setStyleFontSize(finalStyleFontSize(sizeValue, sizeUnit, el));
        }
      } else {
        setStyleFontSize(undefined);
      }
    }, [iconFontSize, size]);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const content = (() => {
      if (InitChildren === undefined) {
        return null;
      } else {
        const style: CSSProperties = {
          ...initStyle,
        };
        if (styleFontSize != null) {
          style.fontSize = styleFontSize;
        }

        const finalColor = contains(
          ['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
          color
        )
          ? color
          : undefined;

        if (finalColor === undefined && color !== undefined) {
          style.color = color;
        }

        return (
          <Icon
            ref={(r) => {
              if (ref) {
                if (typeof ref === 'function') {
                  ref(r);
                } else {
                  ref.current = r;
                }
              }
              innerRef.current = r;
              resetStyleFontSize();
            }}
            fontSize={iconFontSize}
            color={finalColor}
            className={classNames('PdgIcon', className)}
            style={style}
            {...props}
          >
            {typeof InitChildren === 'string' ? (
              InitChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
            ) : (
              <InitChildren />
            )}
          </Icon>
        );
      }
    })();

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return !content ? null : tooltip ? (
      <Tooltip title={tooltip} placement={ifUndefined(tooltipPlacement, 'top')} arrow {...tooltipProps}>
        {content}
      </Tooltip>
    ) : (
      content
    );
  }
);

export default React.memo(PdgIcon);
