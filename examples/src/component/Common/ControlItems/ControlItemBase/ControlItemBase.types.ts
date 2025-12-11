import { ReactNode } from 'react';

export interface ControlItemBaseProps {
  label: string;
  helperText?: string;
  children: ReactNode;
  disabled?: boolean;
}
