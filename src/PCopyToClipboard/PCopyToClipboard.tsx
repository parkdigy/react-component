import React, { MouseEvent, useCallback } from 'react';
import { PCopyToClipboardProps as Props } from './PCopyToClipboard.types';
import copy from 'copy-to-clipboard';

export const PCopyToClipboard = ({ text, options, children, onCopy, ...props }: Props) => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const elem = React.Children.only(children);
      const result = copy(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    },
    [children, onCopy, options, text]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const elem = React.Children.only(children);

  return React.cloneElement(elem, { ...props, onClick: handleClick });
};

export default PCopyToClipboard;
