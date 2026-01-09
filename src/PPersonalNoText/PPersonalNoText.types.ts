import { type PTextProps } from '../PText';

export interface PPersonalNoTextProps extends Omit<PTextProps, 'children'> {
  value?: string | null;
  children?: string | null;
}
