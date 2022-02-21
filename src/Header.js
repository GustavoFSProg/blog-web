import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        background: '#e6e6ff',
        width: '100vw',
        // height: '38px',
        margin: '0',
      }}
    >
      <div style={{ paddingTop: '18px', paddingBottom: '18px' }}>
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
          to="/dashboard"
          style={{
            marginRight: '20px',
            marginLeft: '8px',
            textDecoration: 'none',
            color: 'darkblue',
            fontSize: '18px',
          }}
        >
          Dashboard
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
          to="/login"
          style={{
            marginRight: '20px',
            textDecoration: 'none',
            color: 'darkblue',
            fontSize: '18px',
          }}
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header
