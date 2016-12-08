import React from 'react';
import {render} from 'react-dom';
import {CodeSplitProvider} from 'code-split-component';

import App from './app';

function Root() {
  return (
    <CodeSplitProvider>
      <App />
    </CodeSplitProvider>
  );
}

render(<Root />, document.body);
