import React, { type MouseEvent } from 'react';
import { type PCopyToClipboardProps as Props } from './PCopyToClipboard.types';
export declare const PCopyToClipboard: ({ text, options, children, onCopy, ...props }: Props) => React.ReactElement<{
    onClick: (event: MouseEvent) => void;
}, string | React.JSXElementConstructor<any>>;
export default PCopyToClipboard;
