import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemColorProps
  extends Omit<
    ControlItemButtonGroupProps<'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning'>,
    'label' | 'items' | 'helperText'
  > {}
