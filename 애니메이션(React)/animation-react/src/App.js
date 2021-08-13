import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./App.css";



class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stepNumber:0,
    }
  }
  click(){
    this.setState({stepNumber : this.state.stepNumber+1})
  }
  render() {
    if(this.state.stepNumber<10){
      return (
      
        <div className="app-index-box">
          Press Button for {10-this.state.stepNumber} Times to go to next page.
        </div>
        <Fragment><button onClick = "this.click">

        </button></Fragment>
        
      );
    }else{
      return(
        <div className="homepage">
          Hello!!
        </div>
      )
    }
  }
  
}

export default Box;
