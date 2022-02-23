import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>React Counters</h1>
            <button onClick = {props.minusCounter}> - </button>
            <button onClick = {props.plusCounter}> + </button>
        </div>
    )
};

export default Header;