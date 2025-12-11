import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemColorProps
  extends Partial<
    Omit<
      ControlItemButtonGroupProps<'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning' | string>,
      'items'
    >
  > {}
