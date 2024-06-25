import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/app',
    element: <App/>,
    children:[
      {
        path: 'home',
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
// )
