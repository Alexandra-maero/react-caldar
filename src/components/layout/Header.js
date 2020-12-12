import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Boilers</h1>
        </header>
    )
}

const headerStyle = {
    background: 'rgb(239,232,216)',
    color: 'rgb(19,84,76)',
    textAlign: 'center',
    paddingTop: '10px'
}

export default Header
