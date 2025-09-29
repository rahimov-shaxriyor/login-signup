import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header/>
        <main className='grow'>
            <Outlet/>
        </main>
        <Footer/>

        
    </div>
  )
}

export default MainLayout