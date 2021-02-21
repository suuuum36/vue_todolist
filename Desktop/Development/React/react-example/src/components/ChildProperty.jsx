import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ChildProperty.protoTypes = {
    children : PropTypes.node
}

export default ChildProperty;