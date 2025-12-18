/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/

import React, { CSSProperties, useState, useLayoutEffect, useRef, useCallback } from 'react';
import { Icon, IconProps, Tooltip } from '@mui/material';
import { PIconProps as Props } from './PIcon.types';
import classNames from 'classnames';
import { contains } from '@pdg/compare';
import { finalStyleFontSize, getParentSize } from './PIcon.function.private';

const NamedSizes = ['large', 'medium', 'small'] as const;
const MuiColors = [
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
  tooltipPlacement,
  tooltipProps,
  ...props
}: Props) => {
  const innerRef = useRef<HTMLSpanElement | null>(null);

  const [styleFontSize, setStyleFontSize] = useState<string | number>();

  const isStandardSize = contains(NamedSizes, size);
  const computedIconFontSize = isStandardSize ? (size as IconProps['fontSize']) : undefined;

  const updateFontSize = useCallback(() => {
    const el = innerRef.current;
    if (!el || isStandardSize) {
      setStyleFontSize(undefined);
      return;
    }

    let sizeValue: number | undefined;
    let sizeUnit: string | undefined;

    if (size === 'inherit') {
      const parentSize = getParentSize(el);
      sizeValue = parentSize?.sizeValue;
      sizeUnit = parentSize?.sizeUnit;
    } else if (typeof size === 'number') {
      sizeValue = size;
      sizeUnit = 'px';
    } else if (typeof size === 'string') {
      sizeValue = parseFloat(size);
      sizeUnit = size.replace(sizeValue?.toString() || '', '');
    }

    if (sizeValue && sizeUnit) {
      setStyleFontSize(finalStyleFontSize(sizeValue, sizeUnit, el));
    } else {
      setStyleFontSize(undefined);
    }
  }, [size, isStandardSize]);

  useLayoutEffect(() => {
    if (isStandardSize) return;

    const rafId = requestAnimationFrame(() => {
      updateFontSize();
    });

    return () => cancelAnimationFrame(rafId);
  }, [isStandardSize, updateFontSize]);

  /********************************************************************************************************************
   * Content 렌더링
   ********************************************************************************************************************/

  if (InitChildren === undefined) return null;

  const finalColor = contains(MuiColors, color) ? (color as IconProps['color']) : undefined;

  const style: CSSProperties = {
    ...initStyle,
    fontSize: styleFontSize ?? initStyle?.fontSize,
    color: finalColor === undefined ? color : initStyle?.color,
  };

  const content = (
    <Icon
      {...props}
      ref={(r) => {
        if (typeof ref === 'function') ref(r);
        else if (ref) ref.current = r;
        innerRef.current = r;
        updateFontSize();
      }}
      fontSize={computedIconFontSize}
      color={finalColor}
      className={classNames('PIcon', className)}
      style={style}
    >
      {typeof InitChildren === 'string' ? (
        InitChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
      ) : (
        <InitChildren />
      )}
    </Icon>
  );

  return tooltip ? (
    <Tooltip title={tooltip} placement={tooltipPlacement ?? 'top'} arrow {...tooltipProps}>
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export default PIcon;
