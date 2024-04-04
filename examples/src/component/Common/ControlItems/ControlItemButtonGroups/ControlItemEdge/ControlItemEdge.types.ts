import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemEdgeProps
  extends Omit<ControlItemButtonGroupProps<'start' | 'end'>, 'label' | 'items' | 'helperText'> {}
