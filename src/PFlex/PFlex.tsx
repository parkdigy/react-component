import React from 'react';
import { PFlexProps as Props } from './PFlex.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/compare';
import { PBox } from '../PBox';

export const PFlex = React.forwardRef<HTMLDivElement, Props>(
  ({ className, row = false, spacing, alignCenter, justifyCenter, alignItems, justifyContent, gap, ...props }, ref) => {
    return (
      <PBox
        ref={ref}
        className={classNames('PFlex', className)}
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

export default PFlex;
