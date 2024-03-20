import React,{useContext} from 'react'
import userContext from '../context/userContext'
import UserContextProvider from '../context/UserContextProvider'



export default function Login() {
    const [username,setUsername]=React.useState('')
    const [password,setPassword]=React.useState('')
    const { setUser } = useContext(userContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <UserContextProvider>
        <h1>this is user login page</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleSubmit}>Click Me</button>
    </UserContextProvider>
  )
}
