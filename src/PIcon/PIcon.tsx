/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/

import React, { CSSProperties, useCallback, useEffectEvent, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Icon, Tooltip } from '@mui/material';
import { PIconProps as Props } from './PIcon.types';
import classNames from 'classnames';
import { contains } from '@pdg/compare';
import { finalStyleFontSize, getParentSize } from './PIcon.function.private';
import { useChanged } from '@pdg/react-hook';

const NamedFontSize = ['large', 'medium', 'small'] as const;
const NamedColor = [
  'inherit',
  'action',
  'disabled',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
] as const;

const PIcon = ({
  ref,
  className,
  children: InitChildren,
  style: initStyle,
  size,
  color,
  tooltip,
  tooltipPlacement = 'top',
  tooltipProps,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const innerRef = useRef<HTMLSpanElement | null>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [styleFontSize, setStyleFontSize] = useState<string | number>();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const iconFontSize = contains(NamedFontSize, size) ? size : undefined;

  /********************************************************************************************************************
   * resetStyleFontSize
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

  const resetStyleFontSizeEffectEvent = useEffectEvent(() => resetStyleFontSize());

  /********************************************************************************************************************
   * size 변경 시 처리
   * ******************************************************************************************************************/

  if (useChanged(size)) {
    if (contains(NamedFontSize, size)) {
      setStyleFontSize(undefined);
    }
  }

  useLayoutEffect(() => {
    if (!contains(NamedFontSize, size)) {
      resetStyleFontSizeEffectEvent();
    }
  }, [size]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const contentIconRef = useCallback(
    (r: HTMLSpanElement | null) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(r);
        } else {
          ref.current = r;
        }
      }
      innerRef.current = r;
      resetStyleFontSize();
    },
    [ref, resetStyleFontSize]
  );

  const content = useMemo(() => {
    if (InitChildren === undefined) {
      return null;
    } else {
      const style: CSSProperties = {
        ...initStyle,
      };
      if (styleFontSize != null) {
        style.fontSize = styleFontSize;
      }

      const finalColor = contains(NamedColor, color) ? color : undefined;

      if (finalColor === undefined && color !== undefined) {
        style.color = color;
      }

      return (
        <Icon
          ref={contentIconRef}
          fontSize={iconFontSize}
          color={finalColor}
          className={classNames('PIcon', className)}
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
  }, [InitChildren, className, color, contentIconRef, iconFontSize, initStyle, props, styleFontSize]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return !content ? null : tooltip ? (
    <Tooltip title={tooltip} placement={tooltipPlacement} arrow {...tooltipProps}>
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export default PIcon;
