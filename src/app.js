import React from 'react';
import {CodeSplit} from 'code-split-component';

export default function App() {
  return (
    <div>
    <CodeSplit chunkName="home" modules={{Home: require('./home')}}>
    {function(modules) {
      const {Home} = modules;
      return Home ? <Home /> : <div>Loading</div>;
    }}
    </CodeSplit>
    </div>
  );
}
