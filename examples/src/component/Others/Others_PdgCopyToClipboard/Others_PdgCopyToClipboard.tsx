import React from 'react';
import { Others_PdgCopyToClipboardProps as Props } from './Others_PdgCopyToClipboard.types';
import { PdgButton, PdgCopyToClipboard } from '../../../../../src';

export const Others_PdgCopyToClipboard: React.FC<Props> = () => {
  return (
    <div>
      <PdgCopyToClipboard text='Hello World' onCopy={() => alert('Text copied!')}>
        <PdgButton>Copy &quot;Hello World&quot; to clipboard</PdgButton>
      </PdgCopyToClipboard>
    </div>
  );
};

export default Others_PdgCopyToClipboard;
