import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <div style={{ display: 'flex' }}>
      <Link
        to="/"
        style={{
          marginRight: '20px',
          marginLeft: '50px',
          textDecoration: 'none',
          color: 'darkblue',
          fontSize: '18px',
        }}
      >
        Home
      </Link>
      <Link
        to="/profile"
        style={{
          marginRight: '20px',
          textDecoration: 'none',
          color: 'darkblue',
          fontSize: '18px',
        }}
      >
        Profile
      </Link>

      <Link
        to="/register"
        style={{
          marginRight: '20px',
          textDecoration: 'none',
          color: 'darkblue',
          fontSize: '18px',
        }}
      >
        Cadastro
      </Link>
    </div>
  )
}

export default Header
