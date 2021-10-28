import React from 'react';

const Balance = ({ amount }) => {
    let currAmount = amount;
    return (
        <>
            <h4 >YOUR  BALANCE</h4>
            <h1>${currAmount + amount}</h1>
        </>
    );
};

export default Balance;