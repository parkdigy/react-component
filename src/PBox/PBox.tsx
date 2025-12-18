import React from 'react';
import { PBoxProps as Props } from './PBox.types';
import { Box } from '@mui/material';

export const PBox = ({
  ph,
  pv,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  mh,
  mv,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  fullSize,
  fullWidth,
  fullHeight,
  width,
  height,
  ...otherProps
}: Props) => {
  /********************************************************************************************************************
   * props 처리
   * ******************************************************************************************************************/

  const marginPaddingSizeProps: Pick<
    Props,
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginBottom'
    | 'width'
    | 'height'
  > = {
    paddingLeft: paddingLeft ?? ph,
    paddingRight: paddingRight ?? ph,
    paddingTop: paddingTop ?? pv,
    paddingBottom: paddingBottom ?? pv,
    marginLeft: marginLeft ?? mh,
    marginRight: marginRight ?? mh,
    marginTop: marginTop ?? mv,
    marginBottom: marginBottom ?? mv,
    width: fullWidth || fullSize ? '100%' : width,
    height: fullHeight || fullSize ? '100%' : height,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <Box {...marginPaddingSizeProps} {...otherProps} />;
};

export default PBox;
