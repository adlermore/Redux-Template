import React from 'react';
import Decrement from './Decrement';
import Increment from './Increment';

const styles = {
    fontSize: '50px',
    color: 'purple',
    fontWeight: 'bolder'
}


class Counter extends React.Component {

    state = {
        count: 0
    };

    increment=()=>{
        console.log('rusd');
        let {count}= this.state;
        this.setState({
            count: count+1
        })
    }

    decrement=()=>{

         let {count}= this.state;
        this.setState({
            count: count-1
        })

        console.log(count , count-1);

    }



    render() {
        return (
            <div className='wrapper'>
                <Increment  increment={this.increment} />
                <div className='count' style={styles}>{this.state.count}</div>
                <Decrement decrement={this.decrement} />
            </div>
        )
    }
}

export default Counter;