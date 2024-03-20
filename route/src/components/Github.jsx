import React,{useEffect,useState} from 'react'

export default function Github() {
    const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/praphulksingh')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)})
    // },[])
  return (
    <div className='bg-green-500 text-center text-3xl text-white py-4'>
        Github Followers:{data.followers}</div>
  )
}

export const githubInfoLoader= async ()
=> {
  const response=await fetch('https://api.github.com/users/praphulksingh')
  return response.json()
}