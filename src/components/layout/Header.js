import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Boilers</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>ID</li>
                <li style={liStyle}>Type ID</li>
                <li style={liStyle}>Maintaince Rate</li>
                <li style={liStyle}>Hour Maintaince Cost</li>
                <li style={liStyle}>Hour Eventual Cost</li>
            </ul>
        </header>
    )
}

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: 'rgb(239,232,216)',
    borderBottom: '1px solid #333', 
}
const liStyle =  {
    float: 'left',
    display: 'block',
    width: '11%',
    color: 'rgb(19,84,76)',
    fontWeight: 800,
    fontSize: 12,
    textAlign: 'center',
    padding: '16px 16px',
}
const headerStyle = {
    background: 'rgb(239,232,216)',
    color: 'rgb(19,84,76)',
    textAlign: 'center',
}

export default Header
