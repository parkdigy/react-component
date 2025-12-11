import { PTextProps } from '../PText';
export interface PEmailTextProps extends Omit<PTextProps, 'children' | 'ref'> {
    children?: string | null;
    value?: string | null;
}
