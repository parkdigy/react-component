import { PBoxProps } from '../PBox';
export interface PFlexProps extends Omit<PBoxProps, 'display' | 'flexDirection' | 'component'> {
    row?: boolean;
    spacing?: number | string;
    alignCenter?: boolean;
    justifyCenter?: boolean;
}
