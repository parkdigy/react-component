import React, { MouseEvent } from 'react';
import { PCopyToClipboardProps as Props } from './PCopyToClipboard.types';
import copy from 'copy-to-clipboard';

export const PCopyToClipboard = ({ text, options, children, onCopy, ...props }: Props) => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = (event: MouseEvent) => {
    const elem = React.Children.only(children);
    const result = copy(text, options);

    onCopy?.(text, result);

    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const elem = React.Children.only(children);

  return React.cloneElement(elem, { ...props, onClick: handleClick });
};

export default PCopyToClipboard;
