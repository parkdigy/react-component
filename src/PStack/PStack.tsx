import React from 'react';
import { PStackProps as Props } from './PStack.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/compare';
import { PBox } from '../PBox';

export const PStack = React.forwardRef<HTMLDivElement | HTMLSpanElement, Props>(
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
      <PBox
        ref={ref}
        className={classNames('PStack', className)}
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

export default PStack;
