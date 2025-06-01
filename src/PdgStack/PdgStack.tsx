import React from 'react';
import { PdgStackProps as Props } from './PdgStack.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';
import { PdgBox } from '../PdgBox';

export const PdgStack = React.forwardRef<HTMLDivElement | HTMLSpanElement, Props>(
  (
    {
      className,
      row,
      span,
      inline,
      center,
      centerJustifyContent,
      gap,
      spacing,
      flexWrap,
      wrap,
      alignItems,
      justifyContent,
      ...props
    },
    ref
  ) => {
    return (
      <PdgBox
        ref={ref}
        className={classNames('PdgStack', className)}
        component={span ? 'span' : 'div'}
        display={inline ? 'inline-flex' : 'flex'}
        flexDirection={row ? 'row' : 'column'}
        alignItems={ifUndefined(alignItems, center ? 'center' : undefined)}
        justifyContent={ifUndefined(justifyContent, centerJustifyContent ? 'center' : undefined)}
        gap={ifUndefined(gap, spacing)}
        flexWrap={ifUndefined(flexWrap, wrap ? 'wrap' : 'nowrap')}
        {...props}
      />
    );
  }
);

export default PdgStack;
