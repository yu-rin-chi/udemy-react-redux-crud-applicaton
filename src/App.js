import React from 'react'; 
//「スコープ」


// class App extends Component() {
//   render() { //render() は、レンダリングするためのメソッド
//   return(
//       <React.Fragment>  //  <React.Fragment> returnの内側を①つにまとめるdivのような役割
//       <label htmlFor="bar">
//         bar
//         </label>
//       <input type="text" onChange={()=>{console.log("I am Clicked")}}/>
//       </React.Fragment>
//   )
// }
// }

const App =()=>{ //関数コンポーネント（functionalCOmponent）
  return (
  <div><Cat/>
  <Cat/>    </div>
  )
  }
 const Cat =()=>
 <div>Meow!</div>

export default App;
