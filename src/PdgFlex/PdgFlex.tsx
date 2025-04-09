import React from 'react';
import { PdgFlexProps as Props } from './PdgFlex.types';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';

export const PdgFlex = React.forwardRef<HTMLDivElement, Props>(
  ({ className, row = false, spacing, alignCenter, justifyCenter, alignItems, justifyContent, gap, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={classNames('PdgFlex', className)}
        component='div'
        display='flex'
        flexDirection={row ? 'row' : 'column'}
        alignItems={ifUndefined(alignItems, alignCenter ? 'center' : undefined)}
        justifyContent={ifUndefined(justifyContent, justifyCenter ? 'center' : undefined)}
        gap={ifUndefined(gap, spacing)}
        {...props}
      />
    );
  }
);

export default PdgFlex;
