import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/Footer'

function MainLayout(props) {
    return (
        <div className="flex flex-col w-full min-h-dvh items-center">
            <Header/>
                {/* {props.children} */}
                <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout