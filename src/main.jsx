import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Creates from './components/cruds/Creates.jsx'
import CreateOrEditProduct from './components/cruds/Createedit.jsx'
import UserList from './components/cruduser/Userlist.jsx'
import CreateOrEditUsers from './components/cruduser/Createuser.jsx'

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
      },
      {
        path: 'users',
        element: <UserList/>
      },
      {
        path: 'create-users',
        element: <CreateOrEditUsers/>
      },
      {
        path: 'edit-users/:id',
        element: <CreateOrEditUsers/>
      },
      {
        path: 'cardapio',
        element: <Creates/>
      },
      {
        path: 'cardapio/create',
        element: <CreateOrEditProduct/>,
      },
      {
        path: 'cardapio/edit/:id',
        element: <CreateOrEditProduct/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
