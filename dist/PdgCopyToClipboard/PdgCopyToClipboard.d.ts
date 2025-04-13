import React, { MouseEvent } from 'react';
import { PdgCopyToClipboardProps as Props } from './PdgCopyToClipboard.types';
export declare const PdgCopyToClipboard: ({ text, options, children, onCopy, ...props }: Props) => React.ReactElement<{
    onClick: (event: MouseEvent) => void;
}, string | React.JSXElementConstructor<any>>;
export default PdgCopyToClipboard;
