import React from 'react';
import { PdgFlexColumnBoxProps as Props } from './PdgFlexColumnBox.types';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { ifUndefined } from '@pdg/util';

export const PdgFlexColumnBox: React.FC<Props> = ({ className, spacing, center, alignItems, gap, ...props }) => {
  return (
    <Box
      className={classNames('PdgFlexColumnBox', className)}
      component='div'
      display='flex'
      flexDirection='column'
      alignItems={ifUndefined(alignItems, center ? 'center' : undefined)}
      gap={ifUndefined(gap, spacing)}
      {...props}
    />
  );
};

export type TPdgFlexColumnBox = typeof PdgFlexColumnBox;

export default PdgFlexColumnBox;
