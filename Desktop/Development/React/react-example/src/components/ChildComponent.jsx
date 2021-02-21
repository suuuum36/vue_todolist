import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render () {
    const {
        boolValue,
        numValue,
        arrayValue,
        objValue,
        nodeValue,
        funcValue,
        stringValue,
        requiredStringValue,
    } = this.props;

    return (
      <div>
        <span>불리언 : {String(boolValue)} </span> <br></br>
        <span>숫자 : {numValue} </span> <br></br>
        <span>배열 : {arrayValue} </span> <br></br>
        <span>노드 : {nodeValue} </span> <br></br>
        <span>함수 : {funcValue} </span> <br></br>
        <span>문자 : {stringValue}</span> <br></br>

        <span>객체 : {String(Object.entries(objValue))} </span> <br></br>
        <span>필수값 : {requiredStringValue}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue : PropTypes.bool,
  numValue : PropTypes.number,
  arrayValue : PropTypes.arrayOf(PropTypes.number),
  nodeValue : PropTypes.node,
  funcValue : PropTypes.func,
  stringValue : PropTypes.string,

  //객체 세부 property 설정
  objValue : PropTypes.shape(
    {name: PropTypes.string, age: PropTypes.number}
  ),
  
  //필수 값 설정
  requiredStringValue : PropTypes.string.isRequired,
}

ChildComponent.defaultProps = {
  boolValue : false,
};
export default ChildComponent;