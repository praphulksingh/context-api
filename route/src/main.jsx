import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'


// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"home",
//         element:<Home/>
//     },
//     {
//       path:"contact",
//       element:<ContactUs/>
//     },
//     {
//       path:"about",
//       element:<AboutUs/>
//     }
//   ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="about" element={<AboutUs/>}/>
      <Route path="user/:userId" element={<User/>}/>
      <Route path="github" element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
