import { ControlItemTextFieldProps } from '../ControlItemTextField';

export type ControlItemNumberProps = Omit<ControlItemTextFieldProps, 'type' | 'value' | 'onChange'> & {
  value?: string | number;
  onChange?: (value: string | number | undefined) => void;
};
