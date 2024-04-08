import { PdgTextProps } from '../PdgText';
export interface PdgEmailTextProps extends Omit<PdgTextProps, 'children' | 'ref'> {
    children?: string | null;
    value?: string | null;
}
