import { PdgBoxProps } from '../PdgBox';
export interface PdgFlexColumnBoxProps extends Omit<PdgBoxProps, 'display' | 'flexDirection' | 'component'> {
    spacing?: number | string;
    center?: boolean;
    centerVertical?: boolean;
}
