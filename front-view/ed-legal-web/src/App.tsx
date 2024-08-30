import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header.tsx'
import Home from './pages/Home.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import Footer from './components/Footer.tsx'


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
/*       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/" element={
              <MainLayout>
                <<Outlet />>
              </MainLayout>
            }/>

        </Routes>
      </BrowserRouter> */
    
  )
}

export default App
