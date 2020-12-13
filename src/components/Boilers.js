import React, { Component } from 'react';
import Items from './Items';
import PropTypes from 'prop-types'

class Boilers extends Component {

    render (){
    //console.log(this.props.boilers)
    return this.props.boilers.map((boil) => (
    <Items 
      key={boil.id} 
      boil={boil}  
      delBoiler={this.props.delBoiler} 
      updateBoiler={this.props.updateBoiler}
      />
    ))
  }
}

Boilers.propTypes = {
  boilers: PropTypes.array.isRequired
}
export default Boilers;