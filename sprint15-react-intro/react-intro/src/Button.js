import React, { Component } from 'react';
 // Tell webpack that Button.js uses these styles
import './Button.css';

class Button extends Component {
  render() {
    const color = this.props.color ? this.props.color : "black";
    const name = this.props.name ? this.props.name : "Apasă-mă";

    // You can use them as regular CSS styles
    return <span className="button" style={{ color:color }}>{name}</span>;
  }
}

// Don’t forget to use export default!
export default Button;