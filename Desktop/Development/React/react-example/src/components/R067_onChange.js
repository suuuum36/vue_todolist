import React, { Component, Fragment } from 'react';

class R067_onChange extends Component {
  change = (e) => {
    var val = e.target.value;
    console.log('param : '+ val);
  }

  render() {

    return (
      <Fragment>
        <input type="text" onChange={this.change}/>
        <select onChange={this.change}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
      </Fragment>
    );
  }
}

export default R067_onChange;