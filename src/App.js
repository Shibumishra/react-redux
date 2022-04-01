import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {incrementNum, decrementNum } from  "./actions/index"

const App = () => {
  const myStore = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
        <h4>React Redux</h4>
        <div className='counts'>
          <a onClick={() => dispatch(decrementNum())} className='counts-minus' title='Decrement'><span>-</span></a>
          <input value={myStore} className='counts-input' name='counts' title='text' />
          <a onClick={() => dispatch(incrementNum())} className='counts-plus' title='Increment'><span>+</span></a>
        </div>
    </div>
  );
}

export default App;
