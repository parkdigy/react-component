import { type ReactElement, type MouseEvent } from 'react';
export interface PCopyToClipboardProps {
    text: string;
    children: ReactElement<{
        onClick: (event: MouseEvent) => void;
    }>;
    options?: {
        debug?: boolean;
        message?: string;
        format?: string;
    };
    onCopy?: (text: string, result: boolean) => void;
}
