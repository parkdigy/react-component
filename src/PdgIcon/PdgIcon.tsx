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
  ({ className, children: initChildren, style: initStyle, ...props }, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const children = useMemo(
      () => initChildren?.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`),
      [initChildren]
    );

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

    return (
      <Icon ref={ref} {...props} className={classNames('PdgIcon', className)} style={style}>
        {children}
      </Icon>
    );
  }
);

PdgIcon.displayName = 'Icon';

export default PdgIcon;
