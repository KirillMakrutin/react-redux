import React, {Component} from 'react';
import {connect} from 'react-redux';

import {increment, decrement, add, subtract, storeResult, deleteResult} from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}/>
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}/>
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <hr/>
                <ul style={{
                    listStyleType: 'none'
                }}>
                    {
                        this.props.results.map((result) =>
                            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                                {result.value}
                            </li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: (number) => dispatch(add(number)),
        onSubtractCounter: (number) => dispatch(subtract(number)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (index) => dispatch(deleteResult(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);