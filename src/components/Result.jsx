import React from 'react';

const Result = (item) => {
    const {result} = item;
    return (
        <div>
            <h2 >{result}</h2>
        </div>
    );
}

export default Result;
