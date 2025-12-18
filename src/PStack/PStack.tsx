import React from 'react';
import { PStackProps as Props } from './PStack.types';
import classNames from 'classnames';
import { PBox } from '../PBox';

export const PStack = ({
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
}: Props) => {
  return (
    <PBox
      className={classNames('PStack', className)}
      component={span ? 'span' : 'div'}
      display={inline ? 'inline-flex' : 'flex'}
      flexDirection={row ? 'row' : 'column'}
      alignItems={alignItems ?? (center ? 'center' : undefined)}
      justifyContent={justifyContent ?? (centerJustifyContent ? 'center' : undefined)}
      gap={gap ?? spacing}
      flexWrap={flexWrap ?? (wrap ? 'wrap' : 'nowrap')}
      {...props}
    />
  );
};

export default PStack;
