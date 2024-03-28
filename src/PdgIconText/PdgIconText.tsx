/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgIconTextProps as Props, PdgIconTextDefaultProps } from './PdgIconText.types';
import { PdgIcon } from '../PdgIcon';
import { Box } from '@mui/material';
import classNames from 'classnames';

const PdgIconText: React.FC<Props> = ({
  children,
  className,
  icon,
  iconMarginRight,
  iconProps: initIconProps,
  textProps: initTextProps,
  ...otherProps
}) => {
  const iconProps: Props['iconProps'] = useMemo(
    () => ({
      ...initIconProps,
      style: {
        marginRight: iconMarginRight,
        ...initIconProps?.style,
      },
    }),
    [initIconProps, iconMarginRight]
  );

  const textProps: Props['textProps'] = useMemo(
    () => ({
      ...initTextProps,
      style: {
        verticalAlign: 'middle',
        ...initTextProps?.style,
      },
    }),
    [initTextProps]
  );

  return (
    <Box component='span' className={classNames('PdgIconText', className)} {...otherProps}>
      {icon && (
        <PdgIcon {...iconProps} className={classNames('PdgIconText-Icon', iconProps?.className)}>
          {icon}
        </PdgIcon>
      )}
      <span {...textProps} className={classNames('PdgIconText-Text', textProps?.className)}>
        {children}
      </span>
    </Box>
  );
};

PdgIconText.defaultProps = PdgIconTextDefaultProps;

export default PdgIconText;
