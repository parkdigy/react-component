import React from 'react';
import { type PFlexRowBoxProps as Props } from './PFlexRowBox.types';
import classNames from 'classnames';
import { PBox } from '../PBox';

export const PFlexRowBox = ({
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
}: Props) => {
  return (
    <PBox
      className={classNames('PFlexRowBox', className)}
      component={span ? 'span' : 'div'}
      display={inline ? 'inline-flex' : 'flex'}
      alignItems={alignItems ?? (center ? 'center' : undefined)}
      justifyContent={justifyContent ?? (centerHorizontal ? 'center' : undefined)}
      gap={gap ?? spacing}
      flexWrap={flexWrap ?? (nowrap ? 'nowrap' : 'wrap')}
      {...props}
    />
  );
};

export default PFlexRowBox;
