
import { useState } from 'react';
import './App.css'
import Inputs from './components/Inputs';
import Result from './components/Result';

function App() {

 const [num1, setNum1] = useState();
 const [num2, setNum2] = useState();
 const [result,setResult] =useState();

  return (
    <>
      <h1>calculate</h1>
      <div>
      <Inputs num1 = {num1} num2 ={num2} setNum1={setNum1} setNum2= {setNum2} setResult =
      {setResult}/>
      <Result result={result}/>
        
      </div>
    </>
  )
}

export default App
