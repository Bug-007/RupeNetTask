import React from 'react'
import LoginPage from './Components/LoginForm'
import Counter from './Components/Counter'
import ParentComponent from './Components/ParentComponent'
import UserList from './Components/UserList'

function App() {

  return (
    <>
    
    <LoginPage></LoginPage> 

    <Counter></Counter>

    <ParentComponent></ParentComponent>

    <UserList></UserList>
      
    </>
  )
}

export default App
