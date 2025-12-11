import { ControlItemTextFieldProps } from '../ControlItemTextField';

export type ControlItemTextProps = Omit<ControlItemTextFieldProps, 'type' | 'value' | 'onChange'> & {
  value?: string;
  onChange?: (value: string | undefined) => void;
};
