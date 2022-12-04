import { useState } from 'react';
import './App.css';

const App = () => {
  const[current, setCurrent ] = useState('');
  const[previous, setPrevious] = useState('');
  const[operation, setOperation] = useState('');
  const appendValue =(e) =>{
    const value = e.target.getAttribute('data');
    if(value === '.' && current.includes('.')) return;
    setCurrent(current + value);
  }

  const handleDelete = () =>{
    setCurrent(String(current).slice(0, -1))
  }
  const handleAc = () =>{
    setCurrent('')
    setCurrent('')
    setPrevious('')
  }

  const chooseOperation = (e) =>{
    if(current === '') return
    if(previous !== ''){
      let value = compute();
      setPrevious(value);
    } else{
      setPrevious(current);
    }
    setCurrent('');
    setOperation(e.target.getAttribute('data'));
  }

  const compute =() =>{
    let result;
    let previousNum = parseFloat(previous);
    let currentNum = parseFloat(current);

    if(isNaN(previousNum) || isNaN(currentNum)) return

    switch(operation){
      case '+':
        result = previousNum + currentNum;
        break;
      case '×':
        result = previousNum * currentNum;
        break;
      case '÷':
        result = previousNum / currentNum;
        break;
      case '-':
        result = previousNum - currentNum;
        break;
        default:
          return
    }
    return result;

  }
  const equals = ()=>{
    let value = compute();
    if(value === undefined || value === null) return
    setCurrent(value);
    setPrevious('');
    setOperation('');
  }

  return (
    <div className="App">
      <div className='contianer'>
      <div className='screen'>
        <div className='previous'>{previous} {operation}</div>
        <div className='current'>{current}</div>
        
      
      </div>
      <div className='btn1' onClick={handleAc} control>AC</div>
      <div className='btn4' onClick={handleDelete} control>DEL</div>
      <div className='btn2'data={'÷'} onClick={chooseOperation} operation>÷</div>
      <div className='btn' data={'7'} onClick={appendValue}>7</div>
      <div className='btn' data={'8'} onClick={appendValue}>8</div>
      <div className='btn' data={'9'} onClick={appendValue}>9</div>
      <div className='btn2' data={'×'} onClick={chooseOperation} operation>×</div>
      <div className='btn' data={'4'} onClick={appendValue}>4</div>
      <div className='btn' data={'5'} onClick={appendValue}>5</div>
      <div className='btn' data={'6'} onClick={appendValue}>6</div>
      <div className='btn2' data={'+'} onClick={chooseOperation} operation>+</div>
      <div className='btn' data={'1'} onClick={appendValue}>1</div>
      <div className='btn' data={'2'} onClick={appendValue}>2</div>
      <div className='btn' data={'3'} onClick={appendValue}>3</div>
      <div className='btn2' data={'-'} onClick={chooseOperation} operation>-</div>
      <div className='btn4' data={'.'} onClick={appendValue} control dot>.</div>
      <div className='btn' data={'0'}onClick={appendValue}>0</div>
      <div className='btn3' data={'='} onClick={equals} operation equal>=</div>
      </div>
    </div>
  );
}





export default App;
