import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/reducer';



function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <h3>{count}</h3>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
