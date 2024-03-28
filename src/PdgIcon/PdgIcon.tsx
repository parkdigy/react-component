/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/

import React, { CSSProperties, useMemo } from 'react';
import { Icon } from '@mui/material';
import { PdgIconProps as Props } from './PdgIcon.types';
import classNames from 'classnames';

const PdgIcon = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, children: InitChildren, style: initStyle, ...props }, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const style: CSSProperties = useMemo(
      () => ({
        verticalAlign: 'middle',
        ...initStyle,
      }),
      [initStyle]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return useMemo(() => {
      if (InitChildren === undefined) return null;

      const iconProps = { ...props, className: classNames('PdgIcon', className), style };
      return typeof InitChildren === 'string' ? (
        <Icon ref={ref} {...iconProps}>
          {InitChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)}
        </Icon>
      ) : (
        <InitChildren {...iconProps} />
      );
    }, [InitChildren, className, props, ref, style]);
  }
);

PdgIcon.displayName = 'Icon';

export default PdgIcon;
