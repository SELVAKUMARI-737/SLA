import {useSelector,useDispatch} from 'react-redux';
import { decrement,increment,reset } from '../redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Counter App</h2>
        <button onClick ={()=> dispatch(increment())}>+</button>
        <br />
        {count}
        <br />
        <button onClick ={()=> dispatch(decrement())}> - </button>
        <br />
        <button onClick ={()=> dispatch(reset())}> reset </button>
    </div>
  )
}

export default Counter;