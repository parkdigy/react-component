import { PdgTextProps } from '../PdgText';

export interface PdgTelTextProps extends Omit<PdgTextProps, 'children'> {
  children?: string | null;
  value?: string | null;
}
