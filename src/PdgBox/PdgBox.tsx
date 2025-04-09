import React, { useMemo } from 'react';
import { PdgBoxProps as Props } from './PdgBox.types';
import { Box } from '@mui/material';

export const PdgBox = React.forwardRef<unknown, Props>(({ ph, pv, ...otherProps }, ref) => {
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
    return newProps;
  }, [otherProps, ph, pv]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <Box ref={ref} {...props} />;
});

export default PdgBox;
