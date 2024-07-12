import React from 'react'
import { Outlet } from 'react-router-dom'
import "./DefaultLayout.scss"
import MenuBar from '../../views/MenuBar/MenuBar'
import Footer from '../../views/Footer/Footer'

export default function DefaultLayout() {
  return (
      <>
        <div className='default-layout'>
            <div className='default-left'>
                <MenuBar/>
            </div>
            <div className='default-right'>
                <Outlet/>
            </div>
        </div>
        <Footer/>
      </>
  )
}
