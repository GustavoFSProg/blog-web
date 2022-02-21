import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {' '}
          <Link
            to="/"
            style={{
              marginRight: '20px',
              marginLeft: '5px',
              textDecoration: 'none',
              color: 'darkblue',
              fontSize: '18px',
            }}
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <Link
            to="/dashboard"
            style={{
              marginRight: '20px',
              marginLeft: '5px',
              textDecoration: 'none',
              color: 'darkblue',
              fontSize: '18px',
            }}
          >
            Dashboard
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <Link
            to="/profile"
            style={{
              marginLeft: '5px',
              textDecoration: 'none',
              color: 'darkblue',
              fontSize: '18px',
            }}
          >
            Profile
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link
            to="/login"
            style={{
              marginLeft: '5px',
              textDecoration: 'none',
              color: 'darkblue',
              fontSize: '18px',
            }}
          >
            Login
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
