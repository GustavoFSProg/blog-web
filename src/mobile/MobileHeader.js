import { Link } from 'react-router-dom'
import React from 'react'

function MobileHeader() {
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
        to="/dashboard"
        style={{
          marginRight: '20px',
          marginLeft: '50px',
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
  )
}

export default MobileHeader
