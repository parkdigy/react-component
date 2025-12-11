import { ControlItemBaseProps } from '../../ControlItemBase';
import { TextFieldProps } from '@mui/material';

export type ControlItemTextFieldProps = Omit<TextFieldProps, 'label' | 'helperText' | 'onChange'> &
  Omit<ControlItemBaseProps, 'children'> & {
    onChange?: (value: TextFieldProps['value']) => void;
  };
