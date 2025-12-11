import React from 'react';
import { Others_PCopyToClipboardProps as Props } from './Others_PCopyToClipboard.types';
import { PButton, PCopyToClipboard } from '../../../../../src';

export const Others_PCopyToClipboard: React.FC<Props> = () => {
  return (
    <div>
      <PCopyToClipboard text='Hello World' onCopy={() => alert('Text copied!')}>
        <PButton>Copy &quot;Hello World&quot; to clipboard</PButton>
      </PCopyToClipboard>
    </div>
  );
};

export default Others_PCopyToClipboard;
