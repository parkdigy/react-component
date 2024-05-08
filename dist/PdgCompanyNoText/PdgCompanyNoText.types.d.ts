import { PdgTextProps } from '../PdgText';
export interface PdgCompanyNoTextProps extends Omit<PdgTextProps, 'children'> {
    value?: string | null;
    children?: string | null;
}
