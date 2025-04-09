import { PdgBoxProps } from '../PdgBox';
export interface PdgFlexRowBoxProps extends Omit<PdgBoxProps, 'display' | 'flexDirection' | 'component'> {
    center?: boolean;
    centerHorizontal?: boolean;
    inline?: boolean;
    span?: boolean;
    nowrap?: boolean;
    spacing?: number | string;
}
