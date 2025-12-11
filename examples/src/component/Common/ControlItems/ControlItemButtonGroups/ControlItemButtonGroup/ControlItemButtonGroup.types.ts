import { ControlItemBaseProps } from '../../ControlItemBase';
import { Dayjs } from 'dayjs';

export type ControlItemButtonGroupValue = string | number | boolean | Date | Dayjs;

export interface ControlItemButtonGroupProps<T extends ControlItemButtonGroupValue>
  extends Omit<ControlItemBaseProps, 'children'> {
  items: Readonly<({ label: string; value: T } | T)[]>;
  required?: boolean;
  disabled?: boolean;
  value?: T;
  onChange?: (value?: T) => void;
}
