import React, {Component} from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counters: 0,
    };
  }

  increaseCounter = () => {
    let plusCounter = this.state.counters + 1;
  
    this.setState({
      counters: plusCounter,
    })
  }
  
  decreaseCounter = () => {
    let minusCounter = this.state.counters - 1;
  
    this.setState({
      counters: minusCounter,
    })
  }

  render () {
    return (
      <div className = "App">
        <Header plusCounter = {this.increaseCounter} minusCounter = {this.decreaseCounter}/>
        <div>
          <CounterList counter = {this.state.counters} />
          {/* <CounterList counter = {this.props.data.counters} /> */}
        </div>
        
      </div>
    );
  }
}

export default App;
