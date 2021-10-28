import React, { useRef, useState } from 'react';

const Amount = ({ func }) => {
    const amount = useRef();
    const text = useRef();
    // const [inpu, setInput] = useState("");
    //console.log(amount.current?.value);
    //console.log(func);
    const handletrans = () => {
        func(amount.current?.value, text.current?.value);
        amount.current.value = "";
        text.current.value = "";
    }
    return (
        <div>

            <div className="transaction">
                <h2>Add new Transaction</h2>
                <hr />
                <h4>Text</h4>
                <input ref={text} type="text" placeholder="Enter text..." />
            </div>

            <h3>Amount</h3>
            <hr />
            <p>(negative-expense, positive-income)</p>
            <input ref={amount} type="text" placeholder="Enter amount" /> <br />
            <button onClick={handletrans} className="btn">Add transaction</button>
        </div>
    );
};

export default Amount;