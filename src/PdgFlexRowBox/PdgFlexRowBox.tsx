import React from 'react';
import { PdgFlexRowBoxProps as Props } from './PdgFlexRowBox.types';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';
import { PdgBox } from '../PdgBox';

export const PdgFlexRowBox = React.forwardRef<HTMLDivElement | HTMLSpanElement, Props>(
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
      <PdgBox
        ref={ref}
        className={classNames('PdgFlexRowBox', className)}
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

export default PdgFlexRowBox;
