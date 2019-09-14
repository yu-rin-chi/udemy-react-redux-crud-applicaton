import React from 'react'; 
//「スコープ」

function App() {
  return(
    //  <React.Fragment> returnの内側を①つにまとめるdivのような役割
    <React.Fragment> 
      <label htmlFor="bar">
        bar
        </label>
      <input type="text" onChange={()=>{console.log("I am Clicked")}}/>
      </React.Fragment>
  )
  
  
}

export default App;
