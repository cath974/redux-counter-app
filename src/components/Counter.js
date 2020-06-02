import React from 'react';
import { connect } from 'react-redux';

function Counter (props) {
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter.counterValue
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),

});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


