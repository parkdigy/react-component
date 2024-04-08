import { PdgTextProps } from '../PdgText';

export interface PdgPersonalNoTextProps extends Omit<PdgTextProps, 'children'> {
  value?: string | null;
  children?: string | null;
}
