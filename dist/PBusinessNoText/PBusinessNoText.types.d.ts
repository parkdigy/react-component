import { PTextProps } from '../PText';
export interface PBusinessNoTextProps extends Omit<PTextProps, 'children'> {
    value?: string | null;
    children?: string | null;
}
