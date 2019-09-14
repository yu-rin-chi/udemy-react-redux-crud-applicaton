import React from 'react'; 
//「スコープ」

const App =()=>{ //関数コンポーネント（functionalCOmponent）
  return (
  <div>
    <User name={"Taro"} age={10}/>
    <User name={"Hanako"} age={5}/>
  </div>
  )
// Userに、nameというpropsが与えられ、そのデータはTaro
  }
 const User =(props)=>{
return <div>Hi, I am {props.name}, and {props.age}years old!</div> 
// propsの中身の数だけ繰り返して描かれる
 }

export default App;
