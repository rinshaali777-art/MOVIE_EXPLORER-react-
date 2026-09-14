import React from 'react'

function Header() {
  return (
    <header className=' bg-danger' >
      <div className='logo d-flex align-items-center'>
        <img src="/logo-Photoroom.png" alt=""  style={{width:'70px'}}/>
        <h1 className='ms-3 fw-bold' style={{fontSize:'36px'}}>Movie <span className='text-light'>Explorer</span></h1>
        </div>
    </header>
  )
}

export default Header