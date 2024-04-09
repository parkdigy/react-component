/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/

import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Icon, IconProps, Tooltip } from '@mui/material';
import { PdgIconProps as Props } from './PdgIcon.types';
import classNames from 'classnames';
import { contains, ifUndefined } from '@pdg/util';

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
     * Memo
     * ******************************************************************************************************************/

    const iconFontSize = useMemo(
      () => (contains(['large', 'medium', 'small'] as const, size) ? (size as IconProps['fontSize']) : undefined),
      [size]
    );

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const getParentSize = useCallback((el: HTMLSpanElement) => {
      const parent = el.parentElement;
      if (parent) {
        const parentStyle = getComputedStyle(parent);
        const parentFontSize = parentStyle.fontSize;
        const sizeValue = parseFloat(parentFontSize);
        const sizeUnit = parentFontSize.replace(sizeValue.toString(), '');
        return { sizeValue, sizeUnit };
      }
    }, []);

    const finalStyleFontSize = useCallback(
      (sizeValue: number, sizeUnit: string, el: HTMLSpanElement) => {
        switch (sizeUnit) {
          case 'rem':
            {
              const root = getComputedStyle(document.documentElement).fontSize;
              const rootValue = parseFloat(root);
              sizeValue = sizeValue * rootValue;
              sizeUnit = 'px';
            }
            break;
          case 'em':
            {
              const parentSize = getParentSize(el);
              if (parentSize) {
                sizeValue = sizeValue * parentSize.sizeValue;
                sizeUnit = 'px';
              }
            }
            break;
          case 'vw':
            {
              const vw = window.innerWidth;
              sizeValue = (sizeValue / 100) * vw;
              sizeUnit = 'px';
            }
            break;
          case 'vh':
            {
              const vh = window.innerHeight;
              sizeValue = (sizeValue / 100) * vh;
              sizeUnit = 'px';
            }
            break;
          case 'vmin':
            {
              const vw = window.innerWidth;
              const vh = window.innerHeight;
              const vmin = Math.min(vw, vh);
              sizeValue = (sizeValue / 100) * vmin;
              sizeUnit = 'px';
            }
            break;
          case 'vmax':
            {
              const vw = window.innerWidth;
              const vh = window.innerHeight;
              const vmax = Math.max(vw, vh);
              sizeValue = (sizeValue / 100) * vmax;
              sizeUnit = 'px';
            }
            break;
        }

        switch (sizeUnit) {
          case 'px':
            return Math.round(sizeValue);
          default:
            return `${sizeValue}${sizeUnit}`;
        }
      },
      [getParentSize]
    );

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
    }, [finalStyleFontSize, getParentSize, iconFontSize, size]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const finalColor = useMemo(() => {
      switch (color) {
        case 'inherit':
        case 'action':
        case 'disabled':
        case 'primary':
        case 'secondary':
        case 'error':
        case 'info':
        case 'success':
        case 'warning':
          return color;
      }
    }, [color]);

    const content = useMemo(() => {
      const style: CSSProperties = {
        ...initStyle,
      };
      if (styleFontSize) {
        style.fontSize = styleFontSize;
      }
      if (finalColor === undefined && color !== undefined) {
        style.color = color;
      }

      return InitChildren === undefined ? null : (
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
    }, [
      InitChildren,
      className,
      color,
      finalColor,
      iconFontSize,
      initStyle,
      props,
      ref,
      resetStyleFontSize,
      styleFontSize,
    ]);

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

PdgIcon.displayName = 'Icon';

export default PdgIcon;
