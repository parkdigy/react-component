import { PdgTextProps } from '../PdgText';
export interface PdgBusinessNoTextProps extends Omit<PdgTextProps, 'children'> {
    value?: string | null;
    children?: string | null;
}
