import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Bnd</span>
      <div className="user">
        <img src="https://i.pinimg.com/564x/77/9d/93/779d93052181693a37999bb99af151da.jpg" alt="" />
        <span>Itza</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar