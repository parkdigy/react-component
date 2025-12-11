import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemVariantProps
  extends Omit<ControlItemButtonGroupProps<'outlined' | 'contained' | 'text'>, 'label' | 'items' | 'helperText'> {}
