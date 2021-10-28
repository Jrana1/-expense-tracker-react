import React from 'react';

const Amount = () => {
    return (
        <div>
            <h3>Amount</h3>
            <hr />
            <p>(negative-expense,positive-income)</p>
            <input type="text" placeholder="Enter amount" /> <br />
            <button className="btn">Add transaction</button>
        </div>
    );
};

export default Amount;