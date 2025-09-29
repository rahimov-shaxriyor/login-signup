import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import React, { useContext } from 'react'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'
import Home from './pages/Home'
import { MainContext } from './context/ContextProvider'
import SignUp from './pages/SignUp'

const App = () => {

  const { state } = useContext(MainContext);

  const routes = createBrowserRouter([
    {
      path:"/",
      element: state.isLogged ? <MainLayout /> : <Navigate to="/login" replace />,
      children:[{index:true, element:<Home/>}]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/sign-up",
      element:<SignUp/>
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
