import { ControlItemButtonGroupProps } from '../ControlItemButtonGroup';

export interface ControlItemFontSizeProps
  extends Omit<
    ControlItemButtonGroupProps<'inherit' | 'small' | 'medium' | 'large' | number>,
    'label' | 'items' | 'helperText'
  > {}
