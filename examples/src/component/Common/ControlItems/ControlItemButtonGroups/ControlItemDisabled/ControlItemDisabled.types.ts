import { ControlItemOnOffProps } from '../ControlItemOnOff';

export interface ControlItemDisabledProps extends Omit<ControlItemOnOffProps, 'label' | 'helperText'> {}
