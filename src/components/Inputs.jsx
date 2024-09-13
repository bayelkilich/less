import React from 'react';

const Inputs = (item) => {
    const {num1, num2, setNum1, setNum2,setResult} = item;
    return (
        <div>
            <input type="text" onChange={(e) =>setNum1(+e.target.value)} />
        <input type="text" onChange={(e) =>setNum2(+e.target.value)}  />
        <button onClick={() => {setResult(num1 + num2)}}>+</button>
        <button onClick={() => {setResult(num1 - num2)}}>-</button>
        <button onClick={() => {setResult(num1 * num2)}}>*</button>
        <button onClick={() => {setResult(num1 / num2)}}>/</button>
        </div>
    );
}

export default Inputs;
