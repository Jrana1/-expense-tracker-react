import React from 'react';

const Income = (props) => {
    //console.log(props);
    const [income, expenses] = props.income;
    //console.log(income, expenses);
    return (
        <div className="income-expences">
            <div className="income">
                <h3>income</h3>
                <h2>${income}</h2>
            </div>
            <div className="expenses">
                <h3>expense</h3>
                <h2>$-({expenses})</h2>
            </div>
        </div>
    );
};

export default Income;