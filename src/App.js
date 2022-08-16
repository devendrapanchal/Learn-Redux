import {useSelector,useDispatch} from 'react-redux'
import './index.css'
import {increment,decrement,sign_in} from './actions'
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector ( state=> state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      {isLogged ? <h2 className='center'>You are logged in  </h2> : <h2 className='center'>You must log-in first</h2>}
      <h1 className="center" > counter : {counter}</h1>
      <div className={isLogged ? "center" : "disable"}>
        <button onClick={() =>dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <br />
      <div className="center">
        <button onClick={() => dispatch(sign_in())}>{isLogged ? "LOGOUT" : "LOGIN"}</button>
      </div>
      <br />
      
      
    </div>
  );
}

export default App;
