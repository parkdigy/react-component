import { PdgBoxProps } from '../PdgBox';
export interface PdgFlexProps extends Omit<PdgBoxProps, 'display' | 'flexDirection' | 'component'> {
    row?: boolean;
    spacing?: number | string;
    alignCenter?: boolean;
    justifyCenter?: boolean;
}
