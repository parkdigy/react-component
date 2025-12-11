import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemSizeProps
  extends Omit<ControlItemButtonGroupProps<'small' | 'medium' | 'large'>, 'label' | 'items' | 'helperText'> {}
