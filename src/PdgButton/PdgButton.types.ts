import { ButtonProps } from '@mui/material';

export interface PdgButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  icon?: string;
  startIcon?: string;
  endIcon?: string;
}
