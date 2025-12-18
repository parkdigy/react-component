import React from 'react';
import { ControlItemBaseProps as Props } from './ControlItemBase.types';
import { styled, Typography } from '@mui/material';

export const ControlItemBase = ({ label, helperText, children, disabled }: Props) => {
  return (
    <span style={{ opacity: disabled ? 0.5 : undefined }}>
      <StyledLabel>{label}</StyledLabel>
      {children}
      {helperText && (
        <>
          <br />
          <StyledHelperText>{helperText}</StyledHelperText>
        </>
      )}
    </span>
  );
};

export default ControlItemBase;

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

const StyledLabel = styled(Typography)`
  font-size: 11px;
`;

const StyledHelperText = styled(Typography)`
  opacity: 0.6;
  font-size: 10px;
  margin-top: 2px;
`;
