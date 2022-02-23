import React, {Component} from "react";
import Counter from "./Counter"

class CounterList extends Component {
    render () {
        let counter = [];
        for (let index = 0; index < this.props.counters; index++) {
            counter.push(<Counter />);
        }
        return <div className = "Counter-row">{counter}</div>
    }
}

export default CounterList;