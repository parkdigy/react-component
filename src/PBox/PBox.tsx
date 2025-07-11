import React, { useMemo } from 'react';
import { PBoxProps as Props } from './PBox.types';
import { Box } from '@mui/material';

export const PBox = React.forwardRef<unknown, Props>(
  ({ ph, pv, mh, mv, fullSize, fullWidth, fullHeight, ...otherProps }, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const props: Props = useMemo(() => {
      const newProps: Props = { ...otherProps };
      if (ph !== undefined) {
        newProps.paddingLeft = ph;
        newProps.paddingRight = ph;
      }
      if (pv !== undefined) {
        newProps.paddingTop = pv;
        newProps.paddingBottom = pv;
      }
      if (mh !== undefined) {
        newProps.marginLeft = mh;
        newProps.marginRight = mh;
      }
      if (mv !== undefined) {
        newProps.marginTop = mv;
        newProps.marginBottom = mv;
      }
      if (fullWidth || fullSize) {
        newProps.width = '100%';
      }
      if (fullHeight || fullSize) {
        newProps.height = '100%';
      }
      return newProps;
    }, [fullHeight, fullSize, fullWidth, mh, mv, otherProps, ph, pv]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return <Box ref={ref} {...props} />;
  }
);

export default PBox;
