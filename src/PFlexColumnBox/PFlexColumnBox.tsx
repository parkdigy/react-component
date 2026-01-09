import React from 'react';
import { type PFlexColumnBoxProps as Props } from './PFlexColumnBox.types';
import classNames from 'classnames';
import { PBox } from '../PBox';

export const PFlexColumnBox = ({
  className,
  spacing,
  center,
  centerVertical,
  alignItems,
  justifyContent,
  gap,
  ...props
}: Props) => {
  return (
    <PBox
      className={classNames('PFlexColumnBox', className)}
      component='div'
      display='flex'
      flexDirection='column'
      alignItems={alignItems ?? (center ? 'center' : undefined)}
      justifyContent={justifyContent ?? (centerVertical ? 'center' : undefined)}
      gap={gap ?? spacing}
      {...props}
    />
  );
};

export default PFlexColumnBox;
