import React from "react";
import test from "../revise"

const App =()=> { //App is the component used. Written as a pure function. 
    return (
        console.log("New react app")
    );
}


class App extends Component { //Normal method of writing components.
    
    constructor(){
        super();
        this.state = {
            name : "John",
            input : ""
        }
    } //This is used to pass down state, using a function constructor. 
    
    render(){
        const testValue = `All the names ${this.state.input}`
        return(
            <test value ={testValue} name={this.state.name} /> //How to render components from other files. value gives testValue as a PROP 
        );
    };
}

export default App;  //Regular Boiler Plate for writing any react component.  