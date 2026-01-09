import React from 'react';
import { type PFlexProps as Props } from './PFlex.types';
import classNames from 'classnames';
import { PBox } from '../PBox';

export const PFlex = ({
  className,
  row = false,
  spacing,
  alignCenter,
  justifyCenter,
  alignItems,
  justifyContent,
  gap,
  ...props
}: Props) => {
  return (
    <PBox
      className={classNames('PFlex', className)}
      component='div'
      display='flex'
      flexDirection={row ? 'row' : 'column'}
      alignItems={alignItems ?? (alignCenter ? 'center' : undefined)}
      justifyContent={justifyContent ?? (justifyCenter ? 'center' : undefined)}
      gap={gap ?? spacing}
      {...props}
    />
  );
};

export default PFlex;
