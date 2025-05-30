import { ReactElement, MouseEvent } from 'react';

export interface PdgCopyToClipboardProps {
  text: string;
  children: ReactElement<{ onClick: (event: MouseEvent) => void }>;
  options?: {
    debug?: boolean;
    message?: string;
    format?: string;
  };
  onCopy?(text: string, result: boolean): void;
}
