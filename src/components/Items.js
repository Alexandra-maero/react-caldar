import React, { Component } from 'react'
//import Boilers from './Boilers'
import PropTypes from 'prop-types'

export class Items extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'white',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.boil.maintaince_completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, maintaince_rate } = this.props.boil;
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { maintaince_rate } 
                    <button onClick={this.props.delBoiler.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

Items.propTypes = {
    boil: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white', 
    border: 'none', 
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer', 
    float: 'right'
}

export default Items