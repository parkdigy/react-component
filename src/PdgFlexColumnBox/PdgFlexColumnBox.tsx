import React from 'react';
import { PdgFlexColumnBoxProps as Props } from './PdgFlexColumnBox.types';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';

export const PdgFlexColumnBox = React.forwardRef<HTMLDivElement, Props>(
  ({ className, spacing, center, centerVertical, alignItems, justifyContent, gap, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={classNames('PdgFlexColumnBox', className)}
        component='div'
        display='flex'
        flexDirection='column'
        alignItems={ifUndefined(alignItems, center ? 'center' : undefined)}
        justifyContent={ifUndefined(justifyContent, centerVertical ? 'center' : undefined)}
        gap={ifUndefined(gap, spacing)}
        {...props}
      />
    );
  }
);

export default PdgFlexColumnBox;
