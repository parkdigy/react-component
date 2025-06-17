import React from 'react';
import { PdgFlexProps as Props } from './PdgFlex.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/compare';
import { PdgBox } from '../PdgBox';

export const PdgFlex = React.forwardRef<HTMLDivElement, Props>(
  ({ className, row = false, spacing, alignCenter, justifyCenter, alignItems, justifyContent, gap, ...props }, ref) => {
    return (
      <PdgBox
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
