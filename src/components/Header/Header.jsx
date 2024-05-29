import React from 'react'
import Navbar from '../NavBar/Navbar'
import './index.css'

function Header() {

  const txt = 'Navbar List'

  return (
    <>
        <h1>Salam</h1>
       <Navbar prop={txt}/>

    </>
  )
}

export default Header