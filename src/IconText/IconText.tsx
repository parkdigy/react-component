import React, { useCallback } from 'react';
import { IconTextProps as Props, IconTextDefaultProps } from './IconText.types';
import { Icon } from '../Icon';
import { Box } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';

const IconText: React.FC<Props> = ({
  children,
  icon,
  iconMarginRight,
  iconProps: initIconProps,
  textProps: initTextProps,
  ...otherProps
}) => {
  const [iconProps] = useAutoUpdateState<Props['iconProps']>(
    useCallback(() => {
      return {
        ...initIconProps,
        style: {
          marginRight: iconMarginRight,
          ...initIconProps?.style,
        },
      };
    }, [initIconProps, iconMarginRight])
  );

  const [textProps] = useAutoUpdateState<Props['textProps']>(
    useCallback(() => {
      return {
        ...initTextProps,
        style: {
          verticalAlign: 'middle',
          ...initTextProps?.style,
        },
      };
    }, [initTextProps])
  );

  return (
    <Box component='span' {...otherProps}>
      {icon && <Icon {...iconProps}>{icon}</Icon>}
      <span {...textProps}>{children}</span>
    </Box>
  );
};

IconText.defaultProps = IconTextDefaultProps;

export default IconText;
