import { PBoxProps } from '../PBox';
export interface PFlexColumnBoxProps extends Omit<PBoxProps, 'display' | 'flexDirection' | 'component'> {
    spacing?: number | string;
    center?: boolean;
    centerVertical?: boolean;
}
