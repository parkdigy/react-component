import React from 'react';
import { PFlexColumnBoxProps as Props } from './PFlexColumnBox.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/compare';
import { PBox } from '../PBox';

export const PFlexColumnBox = React.forwardRef<HTMLDivElement, Props>(
  ({ className, spacing, center, centerVertical, alignItems, justifyContent, gap, ...props }, ref) => {
    return (
      <PBox
        ref={ref}
        className={classNames('PFlexColumnBox', className)}
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

export default PFlexColumnBox;
