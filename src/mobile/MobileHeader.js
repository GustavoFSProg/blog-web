import React from 'react'
import SimpleMenu from '../components/Menu'

function MobileHeader() {
  return (
    <div
      style={{
        display: 'flex',
        background: '#e6e6ff',
      }}
    >
      <SimpleMenu />
    </div>
  )
}

export default MobileHeader
