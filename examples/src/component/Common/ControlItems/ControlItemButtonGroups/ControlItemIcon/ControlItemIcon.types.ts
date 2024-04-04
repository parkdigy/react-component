import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemIconProps
  extends Omit<
    Partial<ControlItemButtonGroupProps<'AccountCircle' | 'AddCircle' | 'AddToQueue' | 'Apartment'>>,
    'items'
  > {}
