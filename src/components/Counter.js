import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/counter';

const Counter = () => {
  
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state=> state.counter.showCounter)

  const  dispatch= useDispatch();
  const incrementHandler= ()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler= ()=>{
    dispatch(counterActions.decrement())
  }
  const increaseHandler =()=>{
    dispatch(counterActions.increase(5))
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  // const incrementHandler= ()=>{
  //   dispatch({type: 'increment'})
  // }
  // const decrementHandler= ()=>{
  //   dispatch({type: 'decrement'})
  // }
  // const increaseHandler =()=>{
  //   dispatch({type : 'increase'})
  // }
  
  // const toggleCounterHandler = () => {
  //   dispatch({type:'toggle'})
  // };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
