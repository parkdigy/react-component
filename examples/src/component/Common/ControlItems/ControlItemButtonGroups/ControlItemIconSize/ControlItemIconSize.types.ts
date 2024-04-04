import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemIconSizeProps
  extends Partial<Omit<ControlItemButtonGroupProps<'small' | 'medium' | 'large' | number>, 'items'>> {}
