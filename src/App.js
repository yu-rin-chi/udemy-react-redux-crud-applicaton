import React from 'react'; 
//「スコープ」

function App() {
  const greeting ="Hi!";
    const dom = <h1 className="foo">{greeting}</h1>; //className = htmlのclass
    return dom;
  }

export default App;
