import React from 'react';
import { PdgFlexColumnBoxProps as Props } from './PdgFlexColumnBox.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';
import { PdgBox } from '../PdgBox';

export const PdgFlexColumnBox = React.forwardRef<HTMLDivElement, Props>(
  ({ className, spacing, center, centerVertical, alignItems, justifyContent, gap, ...props }, ref) => {
    return (
      <PdgBox
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
