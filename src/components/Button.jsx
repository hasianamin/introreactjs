import React, { Component } from 'react';

class Button extends Component {
    render() {
      return (
        <button className={this.props.jenisBtn} onClick={this.props.funcpencet}>{this.props.children}</button>
      )
    }
}

export default Button