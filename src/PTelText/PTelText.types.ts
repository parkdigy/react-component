import { type PTextProps } from '../PText';

export interface PTelTextProps extends Omit<PTextProps, 'children'> {
  children?: string | null;
  value?: string | null;
}
