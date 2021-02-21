import React, { Fragment } from 'react';
import ChildComponent from './components/ChildComponent';
import ChildProperty from './components/ChildProperty';
import ShallowEqual from './components/R029_ShallowEqual';
import ReactChange from './components/R067_onChange';
import ReactOnKey from './components/R071_OnKey';
import ReactOnSubmit from './components/R072_onSubmit';
import ReactRef from './components/R073_ReactRef';


class App extends React.Component {
  render() {
    const array = [1,2,3];
    const obj = {name : '제목', age : 30};
    const node = <h1>노드</h1>;
    const func = () => {console.log("hi");};

    return (
      <Fragment>
        {/* <ChildProperty>
          <div><span>자식노드</span></div>
        </ChildProperty>
        <ChildComponent
          //boolValue = {true}
          numValue = {1}
          arrayValue = {array}
          objValue = {obj}
          nodeValue = {node}
          funcValue = {func}
          stringValue = "문자열"
          requiredStringValue = "필수문자열"
        />
        <ShallowEqual/> */}

        {/* <ReactChange/> */}

        {/* <ReactOnKey /> */}

        <ReactOnSubmit />
        <ReactRef/>

      </Fragment>
    );
  }
}
export default App;
