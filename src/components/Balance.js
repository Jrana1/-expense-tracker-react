import React, { useState } from 'react';

const Balance = ({ amount }) => {
    //console.log(amount);
    return (
        <>
            <h4 >YOUR  BALANCE</h4>
            <h1>${Math.abs(amount)}</h1>
        </>
    );
};

export default Balance;