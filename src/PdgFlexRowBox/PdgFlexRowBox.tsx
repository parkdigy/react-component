import React from 'react';
import { PdgFlexRowBoxProps as Props } from './PdgFlexRowBox.types';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';

export const PdgFlexRowBox = React.forwardRef<HTMLDivElement | HTMLSpanElement, Props>(
  ({ className, span, inline, center, gap, spacing, flexWrap, nowrap, alignItems, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={classNames('PdgFlexRowBox', className)}
        component={span ? 'span' : 'div'}
        display={inline ? 'inline-flex' : 'flex'}
        alignItems={ifUndefined(alignItems, center ? 'center' : undefined)}
        gap={ifUndefined(gap, spacing)}
        flexWrap={ifUndefined(flexWrap, nowrap ? 'nowrap' : 'wrap')}
        {...props}
      />
    );
  }
);

export default React.memo(PdgFlexRowBox);
