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

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { CSSProperties, useState } from 'react';
// import { Icon, IconProps, Tooltip } from '@mui/material';
// import { PIconProps as Props } from './PIcon.types';
// import classNames from 'classnames';
// import { contains, ifUndefined } from '@pdg/compare';
// import { finalStyleFontSize, getParentSize } from './PIcon.function.private';
//
// const PIcon = ({
//   ref,
//   className,
//   children: InitChildren,
//   style: initStyle,
//   size,
//   color,
//   tooltip,
//   tooltipPlacement,
//   tooltipProps,
//   ...props
// }: Props & { ref?: React.Ref<HTMLSpanElement> }) => {
//   /********************************************************************************************************************
//    * State
//    * ******************************************************************************************************************/
//
//   const [prevSize, setPrevSize] = useState<Props['size'] | null>(null);
//   const [prevIconElement, setPrevIconElement] = useState<HTMLSpanElement | null>(null);
//   const [iconElement, setIconElement] = useState<HTMLSpanElement | null>(null);
//   const [_styleFontSize, setStyleFontSize] = useState<string | number>();
//   const [_iconFontSize, setIconFontSize] = useState<IconProps['fontSize'] | undefined>();
//
//   /********************************************************************************************************************
//    * computedStyleFontSize, computedIconFontSize
//    * ******************************************************************************************************************/
//
//   let computedStyleFontSize = _styleFontSize;
//   let computedIconFontSize = _iconFontSize;
//
//   if (size !== prevSize) {
//     if (contains(['large', 'medium', 'small'], size)) {
//       computedStyleFontSize = undefined;
//       setStyleFontSize(computedStyleFontSize);
//     }
//   }
//
//   if (size !== prevSize || iconElement !== prevIconElement) {
//     setPrevSize(size);
//     setPrevIconElement(iconElement);
//
//     const isIconSize = contains(['large', 'medium', 'small'], size);
//
//     if (size !== prevSize) {
//       computedIconFontSize = isIconSize ? size : undefined;
//       setIconFontSize(computedIconFontSize);
//     }
//
//     if (size !== prevSize && isIconSize) {
//       computedStyleFontSize = undefined;
//     } else {
//       if (iconElement && computedIconFontSize === undefined) {
//         let sizeValue: number | undefined = undefined;
//         let sizeUnit: string | undefined = undefined;
//
//         if (size === 'inherit') {
//           const parentSize = getParentSize(iconElement);
//           if (parentSize) {
//             sizeValue = parentSize.sizeValue;
//             sizeUnit = parentSize.sizeUnit;
//           }
//         } else if (typeof size === 'number') {
//           sizeValue = size;
//           sizeUnit = 'px';
//         } else if (typeof size === 'string') {
//           sizeValue = parseFloat(size);
//           sizeUnit = size.replace(sizeValue.toString(), '');
//         }
//
//         if (sizeValue && sizeUnit) {
//           computedStyleFontSize = finalStyleFontSize(sizeValue, sizeUnit, iconElement);
//         }
//       } else {
//         computedStyleFontSize = undefined;
//       }
//     }
//
//     setStyleFontSize(computedStyleFontSize);
//   }
//
//   /********************************************************************************************************************
//    * content
//    * ******************************************************************************************************************/
//
//   const content = (() => {
//     if (InitChildren === undefined) {
//       return null;
//     } else {
//       const style: CSSProperties = {
//         ...initStyle,
//       };
//       if (computedStyleFontSize != null) {
//         style.fontSize = computedStyleFontSize;
//       }
//
//       const finalColor = contains(
//         ['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
//         color
//       )
//         ? color
//         : undefined;
//
//       if (finalColor === undefined && color !== undefined) {
//         style.color = color;
//       }
//
//       return (
//         <Icon
//           ref={(r) => {
//             if (ref) {
//               if (typeof ref === 'function') {
//                 ref(r);
//               } else {
//                 ref.current = r;
//               }
//             }
//             setIconElement(r);
//           }}
//           fontSize={computedIconFontSize}
//           color={finalColor}
//           className={classNames('PIcon', className)}
//           style={style}
//           {...props}
//         >
//           {typeof InitChildren === 'string' ? (
//             InitChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
//           ) : (
//             <InitChildren />
//           )}
//         </Icon>
//       );
//     }
//   })();
//
//   /********************************************************************************************************************
//    * Render
//    * ******************************************************************************************************************/
//
//   return content && tooltip ? (
//     <Tooltip title={tooltip} placement={ifUndefined(tooltipPlacement, 'top')} arrow {...tooltipProps}>
//       {content}
//     </Tooltip>
//   ) : (
//     content
//   );
// };
//
//
// export default PIcon;
