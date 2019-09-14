import React from 'react'; 
//「スコープ」


const App =()=>{ //関数コンポーネント（functionalCOmponent）
 
  const profiles =[
  { name:"Taro", age:10 },
  { name:"Hanako", age:5 },
  { name:"Noname" }
]  
  return (
  <div>
   {
     profiles.map((profile,index)=> {
     return <User name={profile.name} age={profile.age} key={index} />
   })
   }
  </div>
  )
// Userに、nameというpropsが与えられ、そのデータはTaro
  }

const User =(props)=>{
return <div>Hi, I am {props.name}, and {props.age}years old!</div> 
// propsの中身の数だけ繰り返して描かれる
 }

 User.defaultProps={
   age:1
 }
export default App;

// コンポーネントからコンポーネントへデータを受け渡す際にpropsを使う