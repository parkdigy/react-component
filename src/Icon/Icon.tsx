import React, { useCallback } from 'react';
import { Icon as MuiIcon } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';
import { IconProps as Props, IconDefaultProps } from './Icon.types';

const Icon = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, children: initChildren, style: initStyle, ...props }, ref) => {
    // State - children ------------------------------------------------------------------------------------------------

    const [children] = useAutoUpdateState<Props['children']>(
      useCallback(() => {
        return initChildren?.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`);
      }, [initChildren])
    );

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        return {
          verticalAlign: 'middle',
          ...initStyle,
        };
      }, [initStyle])
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <MuiIcon ref={ref} {...props} className={className ? `Icon ${className}` : 'Icon'} style={style}>
        {children}
      </MuiIcon>
    );
  }
);

Icon.displayName = 'Icon';
Icon.defaultProps = IconDefaultProps;

export default Icon;
