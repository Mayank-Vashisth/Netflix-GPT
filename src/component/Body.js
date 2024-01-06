import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'

const Body = () => {

  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<browse/>
    }
  ])
  return (
    <div><Login/>
    <browse/>
    </div>
  )
}

export default Body