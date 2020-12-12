import React, { Component } from 'react';
import Items from './Items';
import PropTypes from 'prop-types'

class Boilers extends Component {

    render (){
    //console.log(this.props.boilers)
    return this.props.boilers.map((boil) => (
    <Items key={boil.id} boil={boil} markComplete={this.props.markComplete} delBoiler={this.props.delBoiler} />
    ))
  }
}

Boilers.propTypes = {
  boilers: PropTypes.array.isRequired
}
export default Boilers;