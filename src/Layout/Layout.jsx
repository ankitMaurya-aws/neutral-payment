import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='app_layout fs-6'>
            <div className='app_inner'>
                <Header />
                <main className='app_main_sections'>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>  
    )
}

export default Layout