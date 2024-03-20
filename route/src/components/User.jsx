import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {userId}=useParams() //custom hook
  return (
    <div className='bg-green-500 text-center text-3xl text-white py-4'>User: {userId}</div>
  )
}
