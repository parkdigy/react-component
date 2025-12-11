import React from 'react';
import { PFlexRowBoxProps as Props } from './PFlexRowBox.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/compare';
import { PBox } from '../PBox';

export const PFlexRowBox = React.forwardRef<HTMLDivElement | HTMLSpanElement, Props>(
  (
    {
      className,
      span,
      inline,
      center,
      centerHorizontal,
      gap,
      spacing,
      flexWrap,
      nowrap,
      alignItems,
      justifyContent,
      ...props
    },
    ref
  ) => {
    return (
      <PBox
        ref={ref}
        className={classNames('PFlexRowBox', className)}
        component={span ? 'span' : 'div'}
        display={inline ? 'inline-flex' : 'flex'}
        alignItems={ifUndefined(alignItems, center ? 'center' : undefined)}
        justifyContent={ifUndefined(justifyContent, centerHorizontal ? 'center' : undefined)}
        gap={ifUndefined(gap, spacing)}
        flexWrap={ifUndefined(flexWrap, nowrap ? 'nowrap' : 'wrap')}
        {...props}
      />
    );
  }
);

export default PFlexRowBox;
